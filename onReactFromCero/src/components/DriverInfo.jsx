import React from "react";
import "../assets/styles/components/DriverInfo.scss";

const DriverInfo = () => {
  return (
    <div className="driverInfo">
      <div className="driverInfo__carnet">
        <i class="fas fa-user"></i>
        <div className="info">
          <p className="carnet--name">Driver name</p>
          <div className="califacation">
            <i class="fas fa-star"></i>
            <p>4.5</p>
          </div>
        </div>
      </div>
      <div className="driverInfo__payMethod">
        <div className="method">
          <i class="fas fa-money-bill"></i>
          <p>Efectivo</p>
        </div>
        <p className="price">$ 1000</p>
      </div>
      <div className="driverInfo__options">
        <button type="button">
          <i class="fas fa-phone"></i>
          <p>Contactar</p>
        </button>
        <button type="button">
          <i class="fas fa-share-alt"></i>
          <p>Compartir</p>
        </button>
        <button type="button">
          <i class="fas fa-window-close"></i>
          <p>Cancelar</p>
        </button>
      </div>
    </div>
  );
};
export default DriverInfo;
