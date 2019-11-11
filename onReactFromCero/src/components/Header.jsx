import React from "react";
import { Link } from "@reach/router";
import "../assets/styles/components/Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo">
          <h1>City</h1>
          <p>Driver</p>
        </div>
      </Link>
    </div>
  );
};
export default Header;
