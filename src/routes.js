import React,{Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import GridTable from 'containers/GridTable';
import TreeComponent from 'components/TreeComponent';
import Grid from 'containers/Grid';
import Test from 'containers/Test';


const App = () => (
  <Switch>
    <Route exact={true} path="/" render={e => <h3>Home page</h3>}/>
    <Route path="/table/:table" component={GridTable}/>
    <Route path="/tree" component={TreeComponent}/>
    <Route path="/grid" component={Grid}/>
    <Route path="/test" component={Test}/>
  </Switch>
)
export default App;