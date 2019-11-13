import React from 'react'
import { Link } from "@reach/router";
import "../assets/styles/components/DropOff.scss";
import FavoriteSites from "./FavoriteSites";


const DropOff = () => {
  return (
    <div className="dropOff">
      <h2>Estoy en : </h2>
      <input type="text" value="cal l 108 # 77c - 22" />
      <h2>Voy para : </h2>
      <input type="text" value="call 108 # 77c - 22" />
      <FavoriteSites />
      
      <Link className="btn" to="/service" >Viajar</Link>
    </div>
  );
};
export default DropOff;
