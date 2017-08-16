import React, {Component,} from 'react';
import TypeConfig, {TypeForm, TypeView} from './Type';
import {Select} from 'antd';

@TypeForm
export class DropdownTypeForm extends Component {


  render() {
    const {value, format, options, handleChange} = this.props;
    return <Select defaultValue={value} onChange={(val)=>handleChange({target: {value: val}})}>
      {options.map((el, key)=>{
        return <Select.Option value={el.id} key={`${key}-${el.id}`}>{el.name}</Select.Option>
      })}
    </Select>
  }
}
@TypeView
export class DropdownTypeView extends Component {
  render() {
    const {value, active, inactive} = this.props;
    return <div>{value==true ? active : inactive}</div>
  }
}
const DropdownTypeConfig = {
  ...TypeConfig,
  type: 'DropdownType',
  value: "1",
  options: [
    {name: 'test1', id: "1"},
    {name: 'test2', id: "2"},
    {name: 'test3', id: "3"},
  ]
}
export default DropdownTypeConfig;