import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {prepareColumns} from 'components/hoc';
import DefaultDetailsRow from "./DefaultDetailsRow";

export default class DefaultDetailsBuilder extends Component {

  static propTypes = {
    config: PropTypes.object,
    data: PropTypes.object,
    action: PropTypes.string
  }


  render() {
    const {config: {details}, data, action} = this.props;
    return <div>
      {details.map((each, key) => {
        return <DefaultDetailsRow config={each}
                                  data={data[each.table]}
                                  action={action}
                                  key={key}
        />
      })}
    </div>
  }
}