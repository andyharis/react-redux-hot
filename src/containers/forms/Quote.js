import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import {InputHoc} from 'components/hoc';

@InputHoc
export default class Quote extends Component {
  render() {
    const {config,renderInput} = this.props;
    return <div>
    <Row gutter={16}>
      <Col span={12}>{renderInput(config.attributes.sName)}</Col>
      <Col span={12}>{renderInput(config.attributes.opportunity.attributes.sNo)}</Col>
    </Row>
    </div>
  }
}
