import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {GridTypeRender} from "components/types/Helper";
import DefaultDetailsBuilder from './DefaultDetailsBuilder';
import DefaultInput from './DefaultInput';

function prepareInputs(attributes, props, chain) {
  let data = [];
  for (let attribute in attributes) {
    const object = attributes[attribute];
    if (!object.attributes) {
      const nProps = {
        ...object,
        onChange: data => props.onChange(data, [...chain, attribute])
      };
      data.push(
        <DefaultInput label={object.label} key={`${chain.join('.')}.${attribute}`}>
          {GridTypeRender(nProps, chain, props.data, {action: props.action})}
        </DefaultInput>
      )
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

  render() {
    const {config, local, action} = this.props;
    console.info(this.props.local);
    const types = prepareInputs(config.attributes, {
      data: local,
      action: 'form',
      onChange: function (...rest) {
        console.info(rest);
      }
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
          <DefaultDetailsBuilder data={local} action={action} config={config}/>
        </div>
      </div>
      }
    </div>
  }
}

export default DefaultFormBuilder;