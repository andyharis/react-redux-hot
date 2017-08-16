import React, {Component} from 'react';
import {Card} from 'antd';
import {prepareColumns} from 'components/hoc';
import TableGrid from "components/table/TableGrid";

export default class DefaultDetailsRow extends Component {
  state = {
    columns: [],
    isOpen: false
  }

  componentDidMount() {
    this.setColumns();
  }

  setColumns = () => {
    const {config, action} = this.props;
    this.setState({
      columns: prepareColumns(config.attributes, {action: action != 'view' ? 'form' : 'view'})
    });
  }

  toggleShow = e => this.setState({isOpen: !this.state.isOpen});

  render() {
    const {data, config} = this.props;
    const {columns, isOpen} = this.state;
    return <Card
      title={<span className="pointer" onClick={this.toggleShow}>Details {config.label || config.table}</span>}
      bordered={false}
      bodyStyle={{padding: isOpen ? 10 : 0}}
    >
      {isOpen &&
      <TableGrid data={data} columns={columns}/>
      }
    </Card>
  }
}