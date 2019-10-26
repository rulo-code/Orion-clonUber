import React from 'react'
import Header from "../components/Header";
import Hero from "../components/Hero";
import "../assets/styles/pages/HomeLayout.scss";

const HomeLayout = ({ children }) => {
  return (
    <div className="home">
      <div className="home__header">
        <Header />
      </div>
      <div className="home__hero">
        <Hero>
          {children}
        </Hero>
      </div>
    </div>
  );
};

export default HomeLayout;
