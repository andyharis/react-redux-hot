import React, {Component} from 'react';
import {Form} from 'antd';
import PropTypes from 'prop-types';

class DefaultFormBuilder extends Component {
  static propTypes = {
    local: PropTypes.object.isRequired,
    config: PropTypes.object,
    action: PropTypes.string
  }

  render() {
    return <div>I am a form!</div>
  }
}

export default DefaultFormBuilder;