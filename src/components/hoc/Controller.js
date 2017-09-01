import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as configs from 'configs/tables';
import {GridTypeRender} from 'components/types/Helper';
import {connect} from 'react-redux';
import {fetchData} from "redux/modules/dataManipulator";
import _ from 'lodash';
import queryString from 'query-string';


export function getSelectAttributes(attributes) {
  const data = {};
  Object.keys(attributes).forEach(attribute => {
    const o = attributes[attribute];
    if (!o.attributes) {
      data[attribute] = "";
    } else {
      data[attribute] = getSelectAttributes(o.attributes);
    }
  });
  return data;
}

// export function getServerChain(serverChain, localChain, action, index, {local, server}) {
//   const chain = [...serverChain];
//   const tempChain = serverChain.splice(0, 1);
//   if (action == 'edit') {
//
//   } else {
//     const serverCount = _.get(server, [...tempChain, 'add'], []);
//     const localCount = _.get(local, localChain, []);
//     const localKeys = localCount.length;
//     const serverKeys = serverCount.length || localKeys;
//     const trueKey = index - (localKeys - serverKeys);
//     chain.push(trueKey);
//   }
//   console.info("Server chain", chain.join('.'), action);
//   return chain;
// }

export function prepareColumns(attributes, props = {}, chain = []) {
  let data = [];
  Object.keys(attributes).forEach((attribute, key) => {
    const o = attributes[attribute];
    if (!o.attributes)
      data.push({
        title: o.label || attribute,
        key: `${attribute}.${key}.${chain.join('.')}`,
        dataIndex: [...chain, attribute].join('.'),
        render: (text, record, index) => {
          const nProps = {
            ...props,
            row: record,
            index,
          };
          // console.info(props.action);
          if (props.action !== 'view') {
            nProps.localChain = [...props.localChain, index];
            nProps.serverChain = [...props.serverChain];
            return GridTypeRender(o, chain, record, nProps);
          }
        }
      })
    else
      data = [...data, ...prepareColumns(o.attributes, props, [...chain, attribute])];
  });
  return data;
}

export function prepareDataForFetch(table, additionalParams = {}, withDetails = false) {
  const config = configs[table];
  if (config) {
    let params = {
      limit: config.limit,
      select: getSelectAttributes(config.attributes),
      ...additionalParams
    }
    if (withDetails && config.details) {
      config.details.forEach(details => {
        params.select[details.table] = getSelectAttributes(details.attributes);
      });
    }
    // if (params.where) {
    //   params.where = JSON.stringify(params.where);
    //   console.info(params,JSON.stringify(params.where));
    // }
    return params;
  }
  return false;
}

const mapState = state => ({dataManipulator: state.dataManipulator});
const mapDispatch = {fetchData};

@connect(mapState, mapDispatch)
export default function Controller(WrappedComponent) {
  return class Controller extends Component {
    state = {
      sort: []
    }
    static propTypes = {
      dataManipulator: PropTypes.object,
      fetchData: PropTypes.func
    }

    componentDidMount() {
      this.fetchData(this.props);
    }

    componentWillReceiveProps(nProps) {
      if (nProps.location !== this.props.location)
        this.fetchData(nProps);
    }

    fetchData = (props) => {
      const {match: {params: {table, page, id}}, location: {search}} = props;
      const config = configs[table];
      const queryParams = queryString.parse(search);
      const params = {
        ...queryParams
      };
      if (page)
        params.page = page;
      if (id)
        params.where = [{[config.pk]: `:=${id}`}];
      this.props.fetchData(table, prepareDataForFetch(table, params, id));
    }

    onSort = (sortData) => {
      const {history, location: {pathname, search}} = this.props;
      let query = queryString.parse(search);
      query.sort = [];
      sortData.forEach(({colId, sort}) => {
        query.sort.push(`${sort == 'desc' ? '!' : ''}${colId}`);
      });
      query.sort = query.sort.join(',');
      // query.sort = query.sort.match('!') ? query.sort.replace('!', '') : '!' + query.sort;
      let newUrl = `${pathname}?${queryString.stringify(query)}`;
      const sort = [];
      if (query.sort)
        query.sort.split(',').forEach((attr) => {
          sort.push({
            colId: attr.replace('!'),
            sort: attr.match('!') ? 'desc' : 'asc'
          })
        });
      this.setState({sort}, e => history.push(newUrl));
    }

    render() {
      const {match: {params: {table, page, id}, url}, location: {search}} = this.props;
      const {sort} = this.state;
      const config = configs[table];
      let action = id ? 'edit' : 'add';
      if (url.match('table'))
        action = 'view';
      if (!config)
        return <div>
          Not found {table}
        </div>
      return <div>
        <WrappedComponent {...this.props}
                          agGrid={{
                            onSort: this.onSort,
                            sort: sort
                          }}
                          action={action}
                          table={table}
                          page={page}
                          id={id}
                          config={config}
        />
      </div>
    }
  }
}