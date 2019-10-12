import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../components/Home';
import Login from '../components/Login';
import Registro from '../components/Register';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Registro} />
        {/* <Route exact path="/sign-out" component={Badges} /> */}

        {/* <Route component={NotFound} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
