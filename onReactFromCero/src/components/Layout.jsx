import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Map from "./Map";
import Footer from "./Footer";
import "../assets/styles/components/Layout.scss";

class Layout extends React.Component {
  render() {
    return (
      <div className="layout">
        <div className="layout__header">
          <Header />
        </div>
        <div className="layout__hero">
          <Hero>{this.props.children}</Hero>
        </div>
        <div className="layout__footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Layout;
