import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <li>
          <Link className="item" to="/">Escuela de JavaScript Platzi</Link>
        </li>
        <li>
          <Link className="item" to="/">Grupo: Orion</Link>
        </li>
      </ul>
    </div>
  );
};
export default Footer;
