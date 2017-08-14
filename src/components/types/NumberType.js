import React, {Component} from 'react';
import {TypeForm, TypeView} from './Type';
import {InputNumber} from 'antd';
@TypeForm
export class NumberTypeForm extends Component {

  handleChange = (e) => {
    const {prefix, postfix, separator} = this.props;
    let value = e.toString();
    value = value.replace(prefix, '');
    value = value.replace(postfix, '');
    value = value.replace(separator, '');
    this.props.handleChange({target: {value: value}})
  }


  render() {
    const {handleBlur, prefix, postfix, separator} = this.props;
    const value = this.props.value || "0";
    return <InputNumber
      value={value}
      onChange={this.handleChange}
      // onKeyDown={this.handleChange}
      formatter={value => `${prefix || ''}${value.replace(/\B(?=(\d{3})+(?!\d))/g, separator || '')}${postfix || ''}`}
      // parser={value => {
      //   console.log('parser', value);
      //   prefix && value.replace(prefix, '');
      //   postfix && value.replace(postfix, '');
      //   separator && value.replace(separator, '');
      //   console.log('after parser', value);
      // }}
      onBlur={handleBlur}
    />
  }
}
@TypeView
export class NumberTypeView extends Component {
  render() {
    const {value} = this.props;
    return <span dangerouslySetInnerHTML={{__html: value}}></span>
  }
}
