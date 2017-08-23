import React, {Component,} from 'react';
import TypeConfig, {TypeForm, TypeView} from './Type';
import {Icon, Checkbox} from 'antd';

@TypeForm
export class CheckboxTypeForm extends Component {
  handleChange = ({target: {checked}}) => {
    this.props.handleChange(checked);
  }

  render() {
    const {value} = this.props;
    return <Checkbox  checked={Boolean(value)} onChange={this.handleChange}/>
  }
}

@TypeView
export class CheckboxTypeView extends Component {
  render() {
    const {value, active, inactive} = this.props;
    return <div>{value == true ? active : inactive}</div>
  }
}

const CheckboxTypeConfig = {
  ...TypeConfig,
  type: 'CheckboxType',
  active: <Icon type="check-square-o"/>,
  inactive: "",
}
export default CheckboxTypeConfig;