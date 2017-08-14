import React, {Component,} from 'react';
import {TypeForm, TypeView} from './Type';
import { Input } from 'antd';
@TypeForm
export class TextAreaTypeForm extends Component {
  render() {
    const {value, handleChange} = this.props;
    return <Input.TextArea autosize={{ minRows: 2, maxRows: 6 }}
                  value={value} onChange={handleChange}/>
  }
}
@TypeView
export class TextAreaTypeView extends Component {
  render() {
    const {value} = this.props;
    return <span dangerouslySetInnerHTML={{__html: value}}></span>
  }
}


