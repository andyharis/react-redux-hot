import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Controller, Loader} from 'components/hoc';
import {getCurrentData, loadTemp} from "redux/modules/tempData";
import DefaultFormBuilder from "components/form/default/DefaultFormBuilder";
import {Button} from 'antd';
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
    if (this.props.dataManipulator.result !== next.dataManipulator.result) {
      this.props.loadTemp(next.dataManipulator.result.data[0]);
    }
  }


  render() {
    const {id, config,action} = this.props;
    const {loading: fetching} = this.props.dataManipulator;
    const {loading: temping, local,server,index} = this.props.tempData;
    const loading = fetching || temping;
    const message = fetching ? 'Fetching data...' : 'Preparing save...';
    return <div>
      <Loader loading={loading}
              showWhileLoading={false}
              hint={message}>
        {!loading && local &&
        <DefaultFormBuilder local={local[index]}
                            config={config}
                            server={server[index]}
                            action={action}/>
        }
        {index > 0 && <div>
          <Button type="primary">Save</Button>
          <Button type="danger">Discard</Button>
        </div>}
      </Loader>
    </div>
  }
}