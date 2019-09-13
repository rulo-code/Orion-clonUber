import React from 'react'

import './styles/Home.css'

import barrainclinada from './styles/images/finales/Recurso7.png'
import ciudad from './styles/images/finales/Recurso2.png'

function Home(){
  return(
    <div className="home">
      Hola
      <img className="barra" src={barrainclinada} alt="barra"/>
      <img className="ciudad" src={ciudad} alt="ciudad"/>
    </div>

  )
}
export default Home;