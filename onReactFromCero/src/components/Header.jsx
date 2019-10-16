import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Home.scss";

const Header = () => {
  return (
    <div className="home__logo  flexRow ">
      <Link to="/">
        <div className="flexColumn ">
          <h1>City</h1>
          <p>Driver</p>
        </div>
      </Link>
    </div>
  );
};
export default Header;
