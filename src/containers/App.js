import React, {Component} from 'react';
import {connect} from 'react-redux';
import Test from './Test';
import TreeComponent from 'components/TreeComponent';
import {Layout} from 'antd';
import {config} from "configs/TreeConfig"

export default class App extends Component {
  render() {
    return (<Layout className="layout">
        <Layout.Header>
        </Layout.Header>

        <Layout.Content>
          <div className="content">
            {/*<TreeComponent config={config}/>*/}
            <Test/>
          </div>
        </Layout.Content>

        <Layout.Footer>
        </Layout.Footer>

      </Layout>
    );
  }
}