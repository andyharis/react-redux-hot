import React, {Component} from 'react';

export default class BranchComponent extends Component {
  state = {
    showChildren: false
  }

  showBranch = () =>{
    this.setState({showChildren: !this.state.showChildren});
  }

  render() {
    const {name, children, level} = this.props;
    const {showChildren} = this.state;
    return <div>
      <div className="click" onClick={this.showBranch}>{name}</div>
      {children && showChildren && this.props.getTree(children, level + 1)}
    </div>
  }
}