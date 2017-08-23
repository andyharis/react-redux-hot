import React, {Component,} from 'react';
import TypeConfig, {TypeForm, TypeView} from './Type';
import {Icon, Select, Modal} from 'antd';
import Request from "components/request/Request";
import GridTable from "containers/GridTable";

@TypeForm
export class RelationTypeForm extends Component {
  state = {
    data: [],
    visible:false
  }

  handleSearch = (value) => {
    const {pk, searchField, searchTable} = this.props;
    let select = {};
    select[searchField] = `:~${value}`;
    select[pk] = "";
    Request(searchTable, {select: select}).then((result) => {
      this.setState({data: result.data.data});
    })
  }

  showModal = () =>{
    this.setState({visible: !this.state.visible});
  }

  handleOk = () => {
    console.log("handleOk");
  }

  render() {
    const {value, label, pk, searchField, handleChange} = this.props;
    const {data,visible} = this.state;

    return <div>
      <Select
        defaultValue={value}
        showSearch
        placeholder={`Select ${label}`}
        notFoundContent="Not Found"
        optionFilterProp="children"
        style={{width: 200}}
        onChange={handleChange}
        onSearch={this.handleSearch}
        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        {data.map((el) => {
          console.log(el[pk]);
          return <Select.Option key={el[searchField] + el[pk]} value={el[pk]}>
            {el[searchField]}
          </Select.Option>
        })
        }
      </Select>
      <Icon type="search" onClick={this.showModal}/>

      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={this.handleOk}
        okText="OK"
        cancelText="Cancel"
        onCancel={this.showModal}>
        <GridTable />
      </Modal>
    </div>
  }
}

@TypeView
export class RelationTypeView extends Component {
  render() {
    const {value} = this.props;
    return <div>{value}</div>
  }
}

const RelationTypeConfig = {
  ...TypeConfig,
  type: 'RelationType',
}
export default RelationTypeConfig;