import React, {Component} from 'react';
import Router from 'routes';

import {Dropdown, Icon, Menu, Segment} from 'semantic-ui-react';
import TopMenu from './TopMenu';
export default class App extends Component {

  render() {
    return (
      <div>
        <TopMenu userCan={a=>true}/>
        <div className="main-border">
          <Segment attached='bottom' className="grid-overflow">
            <Router/>
          </Segment>
        </div>
      </div>
    );
  }
}
