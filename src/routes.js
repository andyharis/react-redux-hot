import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import TreeComponent from 'components/TreeComponent';
import EditTable from 'containers/Edit/EditTable';
import GridTable from 'containers/GridTable';
import NotFound from 'containers/NotFound';
import Grid from 'containers/Grid';
import Test from 'containers/Test';
import Home from 'containers/Home/Home';
const App = () => (
  <Switch>
    <Route exact={true} path="/" component={Home}/>
    <Route path="/table/:table/:page" component={GridTable}/>
    <Route path="/table/:table" component={GridTable}/>
    <Route path="/edit/:table/:id" component={EditTable}/>
    <Route path="/edit/:table" component={EditTable}/>
    <Route path="/tree" component={TreeComponent}/>
    <Route path="/grid" component={Grid}/>
    <Route path="/test" component={Test}/>
    <Route component={NotFound}/>
  </Switch>
)
export default App;