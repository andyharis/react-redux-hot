import React, {Component} from 'react';
import TableGrid from "components/table/TableGrid";
import {Controller,getSelectAttributes, prepareColumns, prepareDataForFetch} from 'components/hoc';

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
    this.setState({
      columns: prepareColumns(config.attributes, {action: this.state.action ? 'view' : 'form'})
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
    const {columns} = this.state;
    return <TableGrid loading={loading} data={data} columns={columns} pagination={pagination} rowKey="iID"/>
  }
}