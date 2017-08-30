import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AgGridComponent from 'components/table/AgGridComponent';
import {Loader} from 'components/hoc';
import {Pagination} from 'antd';
import Request from "components/request/Request";


export default class Grid extends Component {
  state = {
    data: [],
    loading: true,
    totalCount: 1,
    page: 1
  }
  static propTypes = {
    config: PropTypes.object.isRequired,
    // data: PropTypes.array.isRequired,
    // page: PropTypes.number,
    // totalCount: PropTypes.number,
    onChange: PropTypes.func,
    // loading: PropTypes.bool.isRequired
  }

  static defaultProps = {
    // page: 1,
    // totalCount: 1,
    onChange: page => page
  }

  componentDidMount() {
    this.fetch(this.props.params);
  }

  fetch = (params = {page: 1}) => {
    const {config} = this.props;
    params = {
      limit: config.limit,
      ...params,
    }
    Request(config.table, params).then(result => this.setState({
      data: result.data.data,
      totalCount: result.data.totalCount,
      page: params.page,
      loading: false
    }));
  }

  render() {
    const {config, onChange, params, options} = this.props;
    const {data, totalCount, page, loading} = this.state;
    const pagination = {
      total: parseInt(totalCount),
      pageSize: config.limit,
      current: parseInt(page) || 1,
      onChange: page => this.fetch({...params, page})
    };
    console.log(pagination);
    return <Loader loading={loading}>
      <AgGridComponent config={config} loading={loading} data={data} options={options}/>
      <br/>
      <Pagination {...pagination}/>
    </Loader>
  }
}
