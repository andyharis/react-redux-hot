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
    data: [{
      "iID": "de39855f-2031-4bd7-979f-e874a80a9fcb",
      "sName": "test selenium",
      "date":"2001-01-01",
      "product": {"bStockItem": "1", "iID": "9997"}
    }, {
      "iID": "c37445c6-9d2b-46f3-b0fa-65247c30b8f1",
      "sName": "STFri Jul 21 22:33:3",
      "product": {"bStockItem": "1", "iID": "9997"}
    }, {
      "iID": "9998",
      "sName": "Lockable wing knob to suit FR030315 box",
      "product": {"bStockItem": "0", "iID": "9998",
      "clients": {"sCompanyName": 'Test Name Comp'},
      }
    }, {
      "iID": "9997",
      "sName": "B&R General purpose powder coated box",
      "product": {"bStockItem": "0", "iID": "9997"}
    }, {
      "iID": "9996",
      "sName": "Sennheiser PC161 Overhead Binaural Headset",
      "product": {"bStockItem": "0", "iID": "9996"}
    }]
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
        columnDefs={getColumns(this.props.config.attributes)}
        rowData={data}
      />
    </div>
  }
}