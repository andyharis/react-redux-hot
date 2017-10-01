import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchData} from "redux/modules/dataManipulator";

const states = state => ({
  data: state.dataManipulator
})

const funcs = {
  fetchData
};

@connect(states, funcs)
export default class Test extends Component {
  static propTypes = {
    data: PropTypes.object,
    fetchData: PropTypes.func
  }

  componentDidMount() {
    this.props.fetchData('fetch here');
  }

  render() {
    const {result, loading, error} = this.props.data;
    return <div>
      Here you can see so much data from API
      {loading && <div style={{fontSize: '20px'}}>Loading...</div>}
      {error && <pre>
        {JSON.stringify(error)}
      </pre>}
      {(!loading && !error) && <div>
        {result.map(row => {
          return <pre>{JSON.stringify(row, 2, 2)}</pre>
        })}
      </div>}
    </div>
  }
}
