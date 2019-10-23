import React from 'react'
import Header from "../components/Header";
import Hero from "../components/Hero";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Hero>
        {children}
      </Hero>
    </div>
  );
};

export default HomeLayout;
