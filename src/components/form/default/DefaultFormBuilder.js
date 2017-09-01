import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {InputTypeRender} from "components/types/Helper";
import DefaultDetailsBuilder from './DefaultDetailsBuilder';
import DefaultInput from './DefaultInput';
import * as forms from 'containers/forms';
import {
  Table,
  Dropdown,
  Icon,
  Label,
  Button,
  Menu,
  Divider,
  Grid,
  Modal,
  Segment,
  Sidebar,
  Message,
  TextArea,
  Form,
  Link as LinkA
} from 'semantic-ui-react';
import { Row, Col } from 'antd';

function getForm(config) {
  if (config.form) {
    return forms[config.form];
  }
}

function prepareInputs(attributes, props, chain) {
  let data = [];
  let objectData = {};
  for (let attribute in attributes) {
    const object = attributes[attribute];
    if (!object.attributes) {
      if (object.exclude.indexOf(props.action) === -1) {
        const nProps = {
          ...object,
          attribute: object.attribute || attribute,
          onChange: data => props.onChange(data, [...chain, attribute])
        };
        data.push(
          <DefaultInput label={object.label || attribute} key={`${chain.join('.')}.${attribute}`}>
            {InputTypeRender(nProps, chain, props.data, {action: props.action, appearance: props.appearance})}
          </DefaultInput>
        )
      }
    } else
      data = [...data, ...prepareInputs(object.attributes, props, [...chain, attribute])];
  }
  return data;
}

class DefaultFormBuilder extends Component {
  state = {
    columns: []
  }
  static propTypes = {
    local: PropTypes.object,
    config: PropTypes.object,
    action: PropTypes.string
  }

  tempSave = (value, {localChain, serverChain}) => {
    console.info(value, localChain, serverChain);
  }

  render() {
    const {config, local, server, action} = this.props;
    const FormComponent = getForm(config);
    const types = prepareInputs(config.attributes, {
      data: local,
      appearance: 'form',
      action,
      onChange: this.tempSave
    }, []);
    return <div className="children-content-position" style={{padding: "10px"}}>

      <Menu attached='top'>
        <Menu.Item>
          <div className="bold">{action == 'edit' ? 'Editing' : 'Adding'} {config.label || config.table}</div>
        </Menu.Item>
        {action == 'edit' &&
        <Menu.Item className="menu-as-button">
          <div className="menu-as-button-button positive" onClick={this.props.saveData}>
            Save changes
          </div>
        </Menu.Item>
        }
        {action == 'edit' &&
        <Menu.Item className="menu-as-button">
          <div className="menu-as-button-button negative" onClick={this.props.clearOnClose}>
            Discard changes
          </div>
        </Menu.Item>
        }
        </Menu>
    <div className="background-gray form-content" style={{padding: "10px"}}>
    {FormComponent ? <FormComponent config={config} local={local} action={action}/> : types}
      <DefaultDetailsBuilder
        local={local}
        server={server}
        action={action}
        config={config}
        tempSave={this.tempSave}
      />
      </div>
    </div>
  }
}

export default DefaultFormBuilder;
