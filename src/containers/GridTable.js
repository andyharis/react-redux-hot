import React, {Component} from 'react';
import {Controller, prepareColumns, Loader} from 'components/hoc';
import {Pagination} from 'antd';
import AgGridComponent from 'components/table/AgGridComponent';

@Controller
export default class GridTable extends Component {
  state = {
    columns: [],
    action: 0
  }

  componentDidMount() {
    this.setColumns();
  }

  setColumns = () => {
    const {config} = this.props;
    const columns = [
      ...prepareColumns(config.attributes, {action: this.state.action ? 'view' : 'form'})
    ];
    this.setState({
      columns
    });
  }

  render() {
    const {table, page, config, history} = this.props;
    const {loading, result} = this.props.dataManipulator;
    const {data, totalCount} = result;
    const pagination = {
      total: parseInt(totalCount),
      pageSize: config.limit,
      current: parseInt(page) || 1,
      onChange: (page) => history.push(`/table/${table}/${page}`)
    };
    return <Loader loading={loading}>
      <AgGridComponent
        config={config}
        data={data}
      />
      <br/>
      <Pagination {...pagination}/>
    </Loader>
  }
}
