import React, {Component} from 'react';
import PropTypes from 'prop-types';

export const TypeForm = (TypeComponent) => {
  return class TypeForm extends Component {
    static propTypes = {
      value: PropTypes.any
    };
    state = {
      value: this.props.value || ''
    }

    handleChange = e => this.setState({value: e.target.value})

    render() {
      const {value} = this.state;
      return <TypeComponent
        {...this.props}
        value={value}
        handleChange={this.handleChange}
      />
    }
  }
};
export const TypeView = (TypeComponent) => {
  return class TypeView extends Component {
    static propTypes = {
      value: PropTypes.string
    };

    render() {
      return <TypeComponent {...this.props}/>
    }
  }
};
const TypeConfig = {
  label: 'Label title'
}
export default TypeConfig;