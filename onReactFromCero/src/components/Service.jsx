import React from "react";
import standarCar from "../assets/static/standarCar.png";
import premiunCar from "../assets/static/premiunCar.png";



import "../assets/styles/components/Service.scss"
const Service = ({ type, description, precie }) => {
  return (
    <div className="service">
      <h3 className="service__title">{type}</h3>
      <div className="service__description">
        {type=== "Xpress" && (
          <>
            <p>Auto basico, precio bajo</p>
            <img src={standarCar} alt="standar"/>
          </>
        )
        }
        {type=== "Premiun" && (
          <>
            <p>Viaja comodo</p>
            <img src={premiunCar} alt="standar"/>
          </>
        )
        }
        
      </div>
      <p className="service__precie">${precie}</p>
    </div>
  );
};
export default Service;
