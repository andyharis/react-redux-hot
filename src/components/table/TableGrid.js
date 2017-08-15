import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Table} from 'antd';
import {LocaleProvider} from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

class TableGrid extends Component {
  static propTypes = {
    data: PropTypes.array,
    columns:PropTypes.array,
    pagination:PropTypes.object,
    loading: PropTypes.bool,
    onChange:PropTypes.func
  }

  static defaultProps = {
    data: [],
    columns:[],
    loading: false
  }

  render() {
    const {data} = this.props;
    return <LocaleProvider locale={enUS}>
      <Table bordered={true}
             size="small"
             dataSource={data}
             {...this.props}
      />
    </LocaleProvider>
  }
}

export default TableGrid;