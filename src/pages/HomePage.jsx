import React from "react";

import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import logo from "../assets/sow.png";

const HomePage = () => {
  return (
    <div className="home-page">
      <Link to="/plants"><img src={logo} alt="mango" className="logo" /></Link>
      <br />
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
