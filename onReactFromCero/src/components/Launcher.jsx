import React from "react";
import { Link, Redirect } from "react-router-dom";
import "../assets/styles/components/Home.scss";
import "../assets/styles/components/Launcher.scss";
const Launcher = props => {
  return (
    <div className="launcher">
      <div className="launcher__buttons"> 
        <Link to="/login" className="btn">
          Iniciar Sesión
        </Link>
        <Link to="/register" className="btn logout">
          Registrarse
        </Link>
      </div>
    </div>
  );
};
export default Launcher;
