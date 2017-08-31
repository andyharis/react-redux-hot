import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card} from 'antd';
import {prepareColumns} from 'components/hoc';
import TableGrid from "components/table/TableGrid";

export default class DefaultDetailsRow extends Component {
  static propTypes = {
    local:PropTypes.object,
    server:PropTypes.object
  }
  state = {
    columns: [],
    isOpen: false
  }

  componentDidMount() {
    this.setColumns();
  }

  setColumns = () => {
    const {config, action,local,server} = this.props;
    const localChain = [config.table];
    const serverChain = [config.table, action];
    this.setState({
      columns: prepareColumns(config.attributes, {
        action: 'form',
        local,
        server,
        localChain,
        serverChain,
        onChange: (value, props) => {
          console.log("Inside table", value, props);
          this.props.tempSave
        }
      })
    });
  }

  toggleShow = e => this.setState({isOpen: !this.state.isOpen});

  render() {
    const {data, config} = this.props;
    const {columns, isOpen} = this.state;
    return <Card
      style={{marginTop:'3px'}}
      title={<span className="pointer" onClick={this.toggleShow}>Details {config.label || config.table}</span>}
      bordered={false}
      bodyStyle={{padding: isOpen ? 10 : 0}}
    >
      {isOpen &&
      <TableGrid data={data}
                 columns={columns}
                 rowKey={(o, k) => `${config.table}.${o[config.pk]}.${k}`}
      />
      }
    </Card>
  }
}