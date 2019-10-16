import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../assets/styles/App.scss';
import Home from '../components/Home';
import LoginCotnainer from '../components/LoginContainer';
import LogoutContainer from '../components/LogoutContainer';
import Layout from '../components/Layout';
import Login from '../components/Login';
import Registro from '../components/Register';
import MapContainer from '../components/MapContainer';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path="/login" component={LoginCotnainer} />
          <Route exact path="/register" component={LogoutContainer} />
          <Route exact path="/map" component={MapContainer} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
