import React from 'react';
import * as Types from "components/types";
import _ from 'lodash';

export function TypeRender(props) {
  let type = `${props.type}View`;
  if (props.appearance === "form")
    type = props.type + "Form";
  const Comp = Types[type];
  if (Comp)
    return <Comp {...props}/>
  return <span>Can't find type <b>{type}</b>.</span>
}
export function InputTypeRender(props, chain = [], data = {}, additionalProps = {}) {
  chain = [...chain, props.attribute];
  console.info(props.attribute);
  return TypeRender({...props, ...additionalProps, value: _.get(data, props.attribute, ''), chain, row: data});
}
export function GridTypeRender(props, chain = [], data = {}, additionalProps = {}) {
  chain = [...chain, props.attribute];
  const value = _.get(data, chain, `No data for ${chain.join('.')}`);
  return TypeRender({...props, ...additionalProps, value, row: data});
}
