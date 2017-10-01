import React, {Component} from 'react';
import {Layout, Menu} from 'antd';
import Router from 'routes';
import {Link} from 'react-router-dom';
import './App.css';

export default class App extends Component {
  render() {
    return (<Layout className="layout">
        <Layout.Header>
          <Menu
            theme="dark"
            mode="horizontal"
            style={{lineHeight: '64px'}}
          >
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/test">Test page</Link>
            </Menu.Item>
          </Menu>
        </Layout.Header>
        <Layout.Content>
          <div className="content">
            <Router/>
          </div>
        </Layout.Content>

        <Layout.Footer>
          Footer blyati
        </Layout.Footer>

      </Layout>
    );
  }
}
