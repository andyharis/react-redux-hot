import React, {Component} from 'react';
import * as configs from 'configs/tables';
import axios from 'axios';
import {connect} from 'react-redux';
import TableGrid from "components/table/TableGrid";
import {fetchData, fetchData1} from "redux/modules/dataManipulator";

const columns = [
  {
    key: 'sCompanyName',
    title: 'Client',
    dataIndex: 'sCompanyName'
  }
];
const mapState = state => ({dataManipulator: state.dataManipulator});
const mapDispatch = {fetchData, fetchData1};
@connect(mapState, mapDispatch)
export default class GridTable extends Component {
  state = {
    data: [],
    pagination: {},
    loading: false
  }

  componentDidMount() {
    this.fetchData(this.props);
  }

  fetchData = () => {
    this.props.fetchData1('http://grid.com/gql/clients');
  }

  render() {
    console.info(this.props.dataManipulator);
    const {match: {params: {table}}} = this.props;
    const {loading, result} = this.props.dataManipulator;
    const {data, totalCount} = result;
    const pagination = {
      total: totalCount
    };
    const config = configs[table];
    if (!config)
      return <div>
        Not found {table}
      </div>
    return <div>
      <button onClick={this.fetchData}>Fetch</button>
      <TableGrid loading={loading} data={data} columns={columns} pagination={pagination} rowKey="iID"/>
    </div>
  }
}