import React, {Component} from 'react';
import TableGrid from './TableGrid';
import PropTypes from 'prop-types';

class HocTableGrid extends Component {
  state = {
    loading: true,
    data: [],
    pagination: {
      pageSize: 10,
    }
  }

  componentDidMount() {
    this.loadData({current: 1});
  }

  loadData = pagination => {
    console.info(pagination);
    const pager = {
      ...this.state.pagination,
      defaultPageSize: limit,
      current: pagination.current,
      total,
    };
    this.setState({loading: true, pagination: pager}, () => {
      setTimeout(() => {
        this.prepareData(pagination);
      }, 1500);
    });
  }
  prepareData = (pagination) => {
    const state = {
      data: getData(pagination.current),
      loading: false
    };
    this.setState(state);
  }

  render() {
    const {data, loading, pagination} = this.state;
    return <TableGrid data={data}
                      pagination={pagination}
                      columns={columns}
                      onChange={this.loadData}
                      loading={loading}
    />
  }
}

export default HocTableGrid;