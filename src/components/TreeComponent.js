import React, {Component} from 'react';
import BranchComponent from "components/BranchComponent";

export default class TreeComponent extends Component {
  getTree = (tree, level, result = []) => {
    tree.map((el, key) => {
      result.push(
        <div key={`level-${key}-${el.id}`} className={`tree-level tree-level-${level}`}>
          {el.children && <BranchComponent {...el} level={level} getTree={this.getTree}/>}
          {!el.children &&
          <div onClick={() => {
            console.log(el);
          }}>{el.name}</div>
          }
        </div>
      );
    })
    return result;
  }

  render() {
    const {config} = this.props;
    return <div>{this.getTree(config, 0)}</div>
  }
}