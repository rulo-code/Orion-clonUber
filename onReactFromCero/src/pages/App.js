import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import '../assets/styles/App.scss';

import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import Layout from '../components/Layout';

import MapContainer from '../components/MapContainer';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/map" component={MapContainer} />
        </Switch>
      </Layout>

    </BrowserRouter>
  );
}

export default App;
