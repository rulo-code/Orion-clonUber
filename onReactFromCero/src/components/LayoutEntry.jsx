import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import "../assets/styles/components/LayoutEntry.scss";

const LayoutEntry = ({ children }) => (
  <div className="layoutContainer">
    <div className="layout__header">
      <Header />
    </div>
    <div className="layout__hero">
      <Hero>{children}</Hero>
    </div>
  </div>
);
export default LayoutEntry;
