import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout'
import Home from './components/Home'
function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/sign-in" component={Badges} />
        <Route exact path="/sign-out" component={Badges} /> */}
        
        {/* <Route component={NotFound} /> */}
      </Switch>
    </Layout>
  </BrowserRouter>
  );
}

export default App;
