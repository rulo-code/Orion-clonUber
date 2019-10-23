import React from 'react'
import { Link } from "@reach/router";
import "../assets/styles/components/Pickup.scss";
import FavoriteSites from "./FavoriteSites";

const Pickup = () => {
  return (
    <div className="pickup">
      <h2>¿Dónde te recogemos?</h2>
      <input type="text" defaultValue="call 108 # 77c - 22" />
      <FavoriteSites />
      <Link to="/dropoff" className="btn" type="button" >Siguiente</Link>
    </div>
  );
};
export default Pickup;
