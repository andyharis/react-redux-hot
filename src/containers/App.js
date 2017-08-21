import React, {Component} from 'react';
import {connect} from 'react-redux';
import {increment,decrement} from 'redux/modules/increment';
const mapStateToProps = state => {
  return {
    count: state.increment.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: e=>dispatch(increment()),
    decrement: e=>dispatch(decrement()),
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
  render() {
    const {count} = this.props;
    return <div>
      You clicked this button {count} times.
      <button onClick={this.props.increment}>Increment</button>
      <button onClick={this.props.decrement}>Decrement</button>
    </div>
  }
}
