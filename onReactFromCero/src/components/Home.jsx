import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Home.scss';
import barrainclinada from '../assets/static/barra.png';
import ciudad from '../assets/static/Recurso2.png';
import nube from '../assets/static/Recurso8.png';
import arbol1 from '../assets/static/Recurso4.png';
import carrito from '../assets/static/carrito3.png';

const Home = () => {
  return (
    <div className='home'>

      <div className='home__hello '>
        <div className='home__hello--logo '>
          <h1>City</h1>
          <p>Driver</p>
        </div>
      </div>
      <div className='home__nubes'>
        <img className='nubes__nube uno' src={nube} alt='nube' />
        <img className='nubes__nube dos' src={nube} alt='nube' />
        <img className='nubes__nube tres' src={nube} alt='nube' />
      </div>
      <div className='container '>

        <div className='loger'>
          <img className='home__barra' src={barrainclinada} alt='barra' />
          <img className='home__ciudad ' src={ciudad} alt='ciudad' />

          <div className='home__arboles  hide '>
            <img className='arboles__arbol uno' src={arbol1} alt='arbol' />
            <img className='arboles__arbol dos ' src={arbol1} alt='arbol' />
          </div>
          <img className='home__carrito ' src={carrito} alt='carrito' />
          <div className='home__form '>
            <Link className='form__btn  signIn' to='/login'>Inicio</Link>
            <Link className='form__btn  signOut' to='/register'>
              Register
            </Link>
          </div>

        </div>
      </div>
    </div>

  );
};
export default Home;
