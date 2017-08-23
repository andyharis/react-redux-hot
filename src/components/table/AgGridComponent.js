import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/theme-fresh.css';
import * as Types from "components/types";

const TypeComponent = (propsCol) => {
  const {props} = propsCol.colDef;
  props.value = propsCol.value;
  let type = `${props.type}View`;
  const Comp = Types[type];
  if (Comp)
    return <Comp {...props}/>
  return <div>Type {type} error. Can't find component</div>
  // return <div>111</div>
}

function getColumns(attr, parent = []) {
  let res = [];
  for (let key in attr) {
    const label = attr[key].label || key;
    if (!attr[key].attributes) {
      res.push({
        headerName: label,
        field: `${parent.join('.')}${parent.length > 0 ? "." : ""}${key}`,
        props: attr[key],
        cellRendererFramework:  TypeComponent,
        ...attr[key].agGrid,
      })
    }
    else {
      if (attr[key].showGroup) {
        res.push({
          headerName: label,
          children: getColumns(attr[key].attributes, [...parent, key])
        })
      }
      else {
        res = [...res, ...getColumns(attr[key].attributes, [...parent, key])];
      }
    }
  }
  return res;
}

export default class AgGridComponent extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired,
    data: PropTypes.array,
  };
  static defaultProps = {
    data: []
  }

  state = {
    columnDefs: []
  }

  componentWillMount() {
    console.log(this.props.config.attributes);
    // this.setState({columnDefs: getColumns(this.props.config.attributes)});
  }

  render() {
    const {config, data} = this.props;
    const {columnDefs} = this.state;
    return <div className="ag-fresh" style={{height: '200px'}}>
      <AgGridReact
        gridOptions={{
          overlayNoRowsTemplate:'<span></span>'
        }}
        columnDefs={getColumns(this.props.config.attributes)}
        rowData={data}
      />
    </div>
  }
}