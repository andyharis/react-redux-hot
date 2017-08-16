import React from 'react';
import * as Types from "components/types";
import _ from 'lodash';

export function TypeRender(props) {
  let type = `${props.type}View`;
  if (props.action === "form")
    type = props.type + "Form";
  const Comp = Types[type];
  if (Comp)
    return <Comp {...props}/>
  return <span>Can't find type <b>{type}</b>.</span>
}

export function GridTypeRender(props, chain, data, additionalProps) {
  chain = [...chain, props.attribute];
  const value = _.get(data, chain, `No data for ${chain.join('.')}`);
  return TypeRender({...props, ...additionalProps, value});
}
