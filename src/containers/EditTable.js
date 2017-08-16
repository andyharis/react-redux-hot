import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Controller, Loader} from 'components/hoc';
import {getCurrentData, loadTemp} from "redux/modules/tempData";
import DefaultFormBuilder from "components/form/DefaultFormBuilder";

const mapState = state => ({tempData: state.tempData});
const mapDispatch = {
  getCurrentData,
  loadTemp
}
@connect(mapState, mapDispatch)
@Controller
export default class EditTable extends Component {
  static propTypes = {
    dataManipulator: PropTypes.object,
    tempData: PropTypes.object,
    getCurrentData: PropTypes.func,
    loadTemp: PropTypes.func,
    config: PropTypes.object.isRequired,
    id: PropTypes.any,
  }

  componentWillReceiveProps(next) {
    if (this.props.dataManipulator.result !== next.dataManipulator.result)
      this.props.loadTemp(next.dataManipulator.result.data[0]);
  }


  render() {
    const {id, config} = this.props;
    const action = id ? 'edit' : 'add';
    const {loading: fetching} = this.props.dataManipulator;
    const {loading: temping, local, server} = this.props.tempData;
    return <div>
      <Loader loading={fetching || temping}
              hint={fetching ? 'Fetching data...' : 'Preparing save...'}>
        <DefaultFormBuilder local={local}
                            config={config}
                            server={server}
                            action={action}/>
      </Loader>
    </div>
  }
}