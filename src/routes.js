import React,{Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import NotFound from 'containers/NotFound';
import Test from 'containers/Test';


const App = () => (
  <Switch>
    <Route exact={true} path="/" render={e => <h3>Home page</h3>}/>
    <Route path="/test" component={Test}/>
    <Route component={NotFound}/>
  </Switch>
)
export default App;