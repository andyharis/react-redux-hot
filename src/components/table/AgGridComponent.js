import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/theme-fresh.css';
import * as Types from "components/types";
import {Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
const TypeComponent = (propsCol) => {
  const {props} = propsCol.colDef;
  const {data} = propsCol;
  props.value = propsCol.value;
  let type = `${props.type}View`;
  const Comp = Types[type];
  if (Comp)
    return <Comp {...props} row={data}/>
  return <div>Type {type} error. Can't find component</div>
  // return <div>111</div>
}

function getColumns(attr, parent = []) {
  let res = [];
  for (let key in attr) {
    const attribute = attr[key];
    const label = attr[key].label || key;
    if (!attr[key].attributes) {
      if (attribute.exclude.indexOf('grid') === -1)
        res.push({
          headerName: label,
          field: `${parent.join('.')}${parent.length > 0 ? "." : ""}${key}`,
          props: attr[key],
          cellRendererFramework: TypeComponent,
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
    additionalColumns: PropTypes.array
  };
  static defaultProps = {
    data: [],
    additionalColumns: [],
  }

  state = {
    columnDefs: []
  }

  componentWillMount() {
    // this.setState({columnDefs: getColumns(this.props.config.attributes)});
  }

  render() {
    const {config, data} = this.props;
    const {columnDefs} = this.state;
    const cols = [
      {
        headerName: 'Settings', field: 'test', width: 45, cellRendererFramework: function ({data}) {
        return <div>
          <Link to={`/edit/${config.table}/${data[config.pk]}`}>
            <Icon name="pencil" className="pointer"/>
          </Link>
          {/*<Link to={`/edit/${config.table}/`}>*/}
          {/*<Icon name="trash" className="pointer"/>*/}
          {/*</Link>*/}
        </div>
      }
      },
      ...getColumns(this.props.config.attributes)
    ];
    return <div className="ag-fresh" style={{height: '300px'}}>
      <AgGridReact
        gridOptions={{
          overlayNoRowsTemplate: '<span></span>'
        }}
        columnDefs={cols}
        rowData={data}
      />
    </div>
  }
}