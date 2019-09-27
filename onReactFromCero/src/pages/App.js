import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../components/Login';
import Register from '../components/Register';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path="/register" component={Register} />

        {/* <Route exact path="/sign-out" component={Badges} /> */}

        {/* <Route component={NotFound} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
