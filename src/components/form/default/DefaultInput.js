import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class DefaultInput extends Component {
  static propTypes = {
    label: PropTypes.string
  }
  static defaultProps = {
    label: 'No label'
  }

  render() {
    const {label} = this.props;
    return <div className="form-row">
      <label className="form-label">{label}</label>
      <div className="form-input">
        {this.props.children}
      </div>
    </div>
  }
}