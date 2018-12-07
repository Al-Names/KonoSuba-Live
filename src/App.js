import React, { Component } from "react";

import "./resources/styles.css";

import Header from "./components/header_footer/Header";
import Featured from "./components/featured";

import VenueInfo from "./components/venueInfo";
import Highlights from "./components/highlights";
import Packages from "./components/packages";
import Location from "./components/location";
import Footer from "./components/header_footer/Footer";

import { Element } from "react-scroll";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px", backgroundColor: "red" }}>
        <Header />
        <Element name="featured">
          <Featured />
        </Element>
        <Element name="information">
          <VenueInfo />
        </Element>
        <Element name="sale">
          <Highlights />
        </Element>
        <Element name="packages">
          <Packages />
        </Element>
        <Element name="location">
          <Location />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default App;
