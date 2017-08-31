import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {InputTypeRender} from "components/types/Helper";
import DefaultDetailsBuilder from './DefaultDetailsBuilder';
import DefaultInput from './DefaultInput';

function prepareInputs(attributes, props, chain) {
  let data = [];
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
    const types = prepareInputs(config.attributes, {
      data: local,
      appearance: 'form',
      action,
      onChange: this.tempSave
    }, []);
    return <div>
      <h2>{action == 'edit' ? 'Editing' : 'Adding'} {config.label || config.table}</h2>
      <hr/>
      <div style={{padding: '8px'}}>
        {types}
      </div>
      {config.details && <div>
        <h2>Details</h2>
        <hr/>
        <div style={{padding: '8px'}}>
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
    </div>
  }
}

export default DefaultFormBuilder;