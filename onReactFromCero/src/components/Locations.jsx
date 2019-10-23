import React from "react";
import "../assets/styles/components/Locations.scss";

const Locations = () => {
  return (
    <div className="locations">
      <h2>Estoy en : </h2>
      <input type="text" value="call 108 # 77c - 22" />
      <h2>Voy para : </h2>
      <input type="text" value="call 108 # 77c - 22" />
      <div className="estimatedTime">
        <i class="fas fa-clock"></i>
        <p>
          Te llevamos en <span>22"</span>
        </p>
      </div>
    </div>
  );
};
export default Locations ;

