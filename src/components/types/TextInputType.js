import React, {Component} from 'react';
import TypeConfig, {TypeForm, TypeView} from './Type';
import {Input} from 'antd';

@TypeForm
export class TextInputTypeForm extends Component {
  render() {
    const {value, handleChange, handleBlur} = this.props;
    return <Input value={value} onChange={handleChange} onBlur={handleBlur}/>
  }
}

@TypeView
export class TextInputTypeView extends Component {
  render() {
    const {value} = this.props;
    return <span dangerouslySetInnerHTML={{__html: value}}></span>
  }
}

const TextInputTypeConfig = {
  ...TypeConfig,
  type: 'TextInputType'
}
export default TextInputTypeConfig;