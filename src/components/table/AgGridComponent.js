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
  return <div>Type {type} error. Cant find component</div>
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
    options: PropTypes.object,
    additionalColumns: PropTypes.array,
    onSort: PropTypes.func
  };
  static defaultProps = {
    data: [],
    options: {},
    additionalColumns: [],
  }

  state = {
    columnDefs: []
  }

  componentWillMount() {
    this.setState({
      gridOptions: {
        overlayNoRowsTemplate: '<span></span>',
        enableSorting: true,
        enableColResize: true,
        paginationPageSize: this.props.config.limit,
      }
    });
    // this.setState({columnDefs: getColumns(this.props.config.attributes)});
  }

  componentWillReceiveProps(props) {
    const {gridOptions} = this.state;
    if (this.props.sort !== props.sort) {
      console.info('sort',props.sort);
      // gridOptions.api && gridOptions.api.setSortModel(props.sort);
    }
  }

  onSort = () => {
    const {gridOptions} = this.state;
    let models = gridOptions.api && gridOptions.api.getSortModel();
    if (this.props.onSort)
      this.props.onSort(models);
  }

  render() {
    const {config, data, options} = this.props;
    const {columnDefs, gridOptions} = this.state;
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
        sortModel={this.props.sort || []}
        onSortChanged={this.onSort}
        gridOptions={gridOptions}
        columnDefs={cols}
        rowData={data}
        {...options}
      />
    </div>
  }
}