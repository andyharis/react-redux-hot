import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NormalTypeRender} from "components/types/Helper";
import DefaultInput from 'components/form/default/DefaultInput';

const InputHoc = (Wrapped) => {
  return class InputHoc extends Component {
    renderInput = (props) => {
      return  <DefaultInput label={props.label || props.attribute}>
          {NormalTypeRender({...props,row:this.props.local, appearance:'form'})}
        </DefaultInput>
    }

    render() {
      return <div>
        <Wrapped {...this.props} renderInput={this.renderInput}/>
      </div>
    }
  }
}

export default InputHoc;
