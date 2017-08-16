import React, {Component} from 'react';
import item from 'configs/tables/item';
import AgGridComponent from 'components/table/AgGridComponent';

export default class Grid extends Component {
  render(){
    return <AgGridComponent config={item}/>
  }
}