import React from 'react'

import './styles/Home.css'

import barrainclinada from './styles/images/finales/Recurso7.png'
import ciudad from './styles/images/finales/Recurso2.png'
import nube from './styles/images/finales/Recurso8.png'
import arbol1 from './styles/images/finales/Recurso4.png'
import arbol2 from './styles/images/finales/Recurso5.png'

function Home(){
  return(
    <div className="home">
      <img className="home__barra" src={barrainclinada} alt="barra"/>
      <img className="home__ciudad" src={ciudad} alt="ciudad"/>
      <div className="home__nuves">
        <img className="nuves__nuve uno" src={nube} alt="nube"/>
        <img className="nuves__nuve dos" src={nube} alt="nube"/>
        <img className="nuves__nuve tres" src={nube} alt="nube"/>
      </div>
      <div className="home__arboles ">
        <img className="arboles__arbol uno" src={arbol1} alt="arbol"/>
        <img className="arboles__arbol dos " src={arbol1} alt="arbol"/>
      </div>    
    </div>


  )
}
export default Home;