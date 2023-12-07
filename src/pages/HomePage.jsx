import React from "react";

import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import logo from "../assets/logo-no-background.png";

const HomePage = () => {
  return (
    <div className="home-page">
       
      { <img src={logo} alt="Your Logo" style={{ display: "block" }} /> }

      <h1>
        <Link to="/plants">Explore our plants</Link>
      </h1>
      <br />
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
