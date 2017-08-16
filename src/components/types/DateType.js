import React, {Component,} from 'react';
import TypeConfig, {TypeForm, TypeView} from './Type';
import {DatePicker} from 'antd';

import moment from 'moment';
import {LocaleProvider} from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

@TypeForm
export class DateTypeForm extends Component {

  handleChangeDate = (e) => {
    const date = e ? e.format('L') : null;
    this.props.handleChange({target: {value: date}})
  }

  render() {
    const {value, format} = this.props;
    return <LocaleProvider locale={enUS}>
      <DatePicker value={value ? moment(value) : null}
                  format={format}
                  onChange={this.handleChangeDate}/>
    </LocaleProvider>
  }
}
@TypeView
export class DateTypeView extends Component {
  render() {
    const {value, format} = this.props;
    return <span dangerouslySetInnerHTML={{__html: value ? moment(value).format(format) : ""}}></span>
  }
}
const DateTypeConfig = {
  ...TypeConfig,
  type: 'DateType',
  format: "YYYY/MM/DD",

}
export default DateTypeConfig;