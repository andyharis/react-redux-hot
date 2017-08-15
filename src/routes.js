import React from 'react';
import {Switch, Route} from 'react-router-dom';
import GridTable from 'containers/GridTable';
import TreeComponent from 'components/TreeComponent';

const App = () => (
  <Switch>
    <Route exact={true} path="/" render={e => <h3>Home page</h3>}/>
    <Route path="/table/:table" component={GridTable}/>
    <Route path="/tree" component={TreeComponent}/>
  </Switch>
)
export default App;