import React from 'react'
import { Link } from "@reach/router";
import "../assets/styles/components/Services.scss";
import "../assets/styles/Vars.scss"
import Service from "../components/Service"
import standarCar from "/home/andres/Documents/Platzi/Orion-clonUber/onReactFromCero/src/assets/static/standarCar.png";
import premiunCar from "/home/andres/Documents/Platzi/Orion-clonUber/onReactFromCero/src/assets/static/premiunCar.png";
import Locations from './Locations';


const Services = () => {
  return (
    <div className="services">
      <div className="services__locations">
        <Locations />
      </div>
      <div className="services__type">
        <div className="service active">
          <h3>Xpress</h3>
          <div className="service__description">
            <p>Auto basico, precio bajo</p>
            <img src={standarCar} alt="xpress" />
          </div>
          <p className="service__precie">$ 1000</p>
        </div>
        <div className="service">
          <h3>Premiun</h3>
          <div className="service__description">
            <p>Viaja con confort</p>
            <img src={premiunCar} alt="xpress" />
          </div>
          <p className="service__precie">$ 1200</p>
        </div>
        
      </div>
      <div className="services__payMethod">
        <div>
          <i class="fas fa-money-bill"></i>
          <p>Efectivo</p>
        </div>
        <div>
         <i class="fas fa-cog"></i>
        </div>
      </div>
      <Link className="btn" to="/driverfound" >Confirmar</Link>
    </div>
  );
};
export default Services;
