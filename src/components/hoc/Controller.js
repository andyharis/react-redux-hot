import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as configs from 'configs/tables';
import {GridTypeRender} from 'components/types/Helper';
import {connect} from 'react-redux';
import {fetchData} from "redux/modules/dataManipulator";

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

export function prepareColumns(attributes, props = {}, chain = []) {
  let data = [];
  Object.keys(attributes).forEach((attribute, key) => {
    const o = attributes[attribute];
    if (!o.attributes)
      data.push({
        title: o.label || attribute,
        key: `${attribute}.${key}.${chain.join('.')}`,
        dataIndex: [...chain, attribute].join('.'),
        render: (text, record) => GridTypeRender(o, chain, record, props)
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
    if (params.where) {
      params.where = JSON.stringify(params.where);
    }
    return params;
  }
  return false;
}

const mapState = state => ({dataManipulator: state.dataManipulator});
const mapDispatch = {fetchData};

@connect(mapState, mapDispatch)
export default function Controller(WrappedComponent) {
  return class Controller extends Component {
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
      const {match: {params: {table, page, id}}} = props;
      const config = configs[table];
      const params = {};
      if (page)
        params.page = page;
      if (id)
        params.where = [{[config.pk]: `:=${id}`}];
      this.props.fetchData(table, prepareDataForFetch(table, params, id));
    }

    render() {
      const {match: {params: {table, page, id}}} = this.props;
      const config = configs[table];
      if (!config)
        return <div>
          Not found {table}
        </div>
      return <div>
        <WrappedComponent {...this.props}
                          table={table}
                          page={page}
                          id={id}
                          config={config}
        />
      </div>
    }
  }
}