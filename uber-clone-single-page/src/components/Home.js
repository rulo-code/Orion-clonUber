import React from 'react'

import './styles/Home.css'

import barrainclinada from './styles/images/finales/barra.png'
import ciudad from './styles/images/finales/Recurso2.png'
import nube from './styles/images/finales/Recurso8.png'
import arbol1 from './styles/images/finales/Recurso4.png'
import carrito from './styles/images/finales/carrito3.png'

function Home(){
  return(
    <div className="home">

      <div className="home__hello ">
        <h1>City</h1>
        <p>Driver</p>
      </div>
      <div className="home__nubes">
          <img className="nubes__nube uno" src={nube} alt="nube"/>
          <img className="nubes__nube dos" src={nube} alt="nube"/>
          <img className="nubes__nube tres" src={nube} alt="nube"/>
        </div>
      <div className="container ">
        <img className="home__barra" src={barrainclinada} alt="barra"/>
        <img className="home__ciudad" src={ciudad} alt="ciudad"/>
       
        <div className="home__arboles ">
          <img className="arboles__arbol uno" src={arbol1} alt="arbol"/>
          <img className="arboles__arbol dos " src={arbol1} alt="arbol"/>
        </div>  
        <img className="home__carrito" src={carrito} alt="carrito"/> 
        <div className="home__form ">
        <a className="form__btn  signIn" href="/">Inicio</a>
        <a className="form__btn  signOut" href="/">Registro</a>
      </div>
    </div>
      </div> 



      


  )
}
export default Home;