import React from "react";
import { Link, Redirect } from 'react-router-dom';
import "../assets/styles/components/Home.scss";
import "../assets/styles/components/Launcher.scss";
const Launcher = (props) => {

  return (
    <div className=" flexColumn">
      <div  className="flexColumn laucherContainer">
        <Link to="/login" className="btn login"  >
            Iniciar Sesión
        </Link>
        <Link to="/register" className="btn logout"  >
            Registrarse
        </Link>
      </div>
    </div>
  );
};
export default Launcher;
