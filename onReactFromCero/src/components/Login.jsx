import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Login.css';
import barrainclinada from '../assets/static/barra.png';
import ciudad from '../assets/static/Recurso2.png';
import nube from '../assets/static/Recurso8.png';
import arbol1 from '../assets/static/Recurso4.png';
import carrito from '../assets/static/carrito3.png';

const Login = () => {
  return (
    <div className='container'>
      <div className='Logo'>
        <div className='home__hello--logo '>
          <h1>City</h1>
          <p>Driver</p>
        </div>
      </div>
      <div className='form'>
        <img className='form--barra' src={barrainclinada} alt="Barrainclinada"/>
      </div>
    </div>
  );

};
export default Login;