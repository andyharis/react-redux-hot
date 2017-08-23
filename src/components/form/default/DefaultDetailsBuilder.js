import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {prepareColumns} from 'components/hoc';
import DefaultDetailsRow from "./DefaultDetailsRow";

export default class DefaultDetailsBuilder extends Component {

  static propTypes = {
    config: PropTypes.object,
    local: PropTypes.object,
    server: PropTypes.object,
    action: PropTypes.string
  }


  render() {
    const {config: {details}, local,server, action} = this.props;
    return <div>
      {details.map((each, key) => {
        return <DefaultDetailsRow config={each}
                                  tempSave={this.props.tempSave}
                                  data={local[each.table]}
                                  local={local}
                                  server={server}
                                  action={action}
                                  key={key}
        />
      })}
    </div>
  }
}