import React, {Component} from 'react';
import PropTypes from 'prop-types';

export const TypeForm = (TypeComponent) => {
  return class TypeForm extends Component {
    static propTypes = {
      value: PropTypes.any,
      onChange: PropTypes.func
    };
    state = {
      value: this.props.value || ''
    }

    handleChange = e =>{
      this.setState({value: e.target ? e.target.value : e},
        b => {this.props.onChange &&
        this.props.onChange(this.state.value, this.props)})
    }

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
      value: PropTypes.any
    };

    render() {
      return <TypeComponent {...this.props}/>
    }
  }
};
export const MainConfig = {
  table: 'default',
  limit: 10,
  pk: 'iID',
  edit: true,
  delete: true,
  toDetails: function () {
    return {
      table: this.table,
      attributes: this.attributes
    };
  }
};

const TypeConfig = {
  exclude: [], //add,edit,grid
}
export default TypeConfig;
