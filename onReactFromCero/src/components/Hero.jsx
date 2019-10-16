import React, { useState } from "react";
import { Link, HashRouter, Switch, Route } from "react-router-dom";
import "../assets/styles/components/Hero.scss";
import Login from "./Login";
import Register from "./Register";
import Launcher from "./Launcher";
import barrainclinada from "../assets/static/barra.png";
import ciudad from "../assets/static/Recurso2.png";
import nube from "../assets/static/Recurso8.png";
import arbol1 from "../assets/static/Recurso4.png";
import carrito from "../assets/static/carrito3.png";

const Hero = ({ children }) => {
  return (
    <div className="home__main  ">
      <img className="img main--barra" src={barrainclinada} alt="barra" />
      <img className="img main--ciudad" src={ciudad} alt="barra" />
      <img className="img main--carro" src={carrito} alt="barra" />

      <div className="img main__arboles">
        <img className=" main--arbol1" src={arbol1} alt="barra" />
        <img className=" main--arbol2" src={arbol1} alt="barra" />
      </div>

      <div className="main__slogan">
        <h2>Viaja Rapido y Seguro</h2>
      </div>

      <div className="formContainer">
        { children }
      </div>
      
    </div>
  );
};
export default Hero;
