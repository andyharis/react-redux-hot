import React, {Component,} from 'react';
import TypeConfig, {TypeForm, TypeView} from './Type';
import {DatePicker} from 'antd';

import moment from 'moment';
import {LocaleProvider} from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

@TypeForm
export class TimeTypeForm extends Component {

  handleChangeDate = (e, value) => {
    console.log(e, value);
    this.props.handleChange({target: {value: e}})
  }

  render() {
    const {value, format} = this.props;
    return <LocaleProvider locale={enUS}>
      <DatePicker
        value={value ? moment(value) : null}
        format={format}
        showTime={true}
        onChange={this.handleChangeDate}
      />
    </LocaleProvider>
  }
}
@TypeView
export class TimeTypeView extends Component {
  render() {

    const {value, format} = this.props;
    return <span dangerouslySetInnerHTML={{__html: moment(value).format(format)}}></span>
  }
}
const TimeTypeConfig = {
  ...TypeConfig,
  type: 'TimeType',
  format: "HH:mm",

}
export default TimeTypeConfig;