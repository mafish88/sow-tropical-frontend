import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Sow Tropical</h1>
      
      <p>Welcome to Sow Tropical, your one-stop knowledge shop for all things tropical plants!</p>
      <p>We showcase a wide variety of tropical plants, ranging from indoor ornimentals to outdoor exotic fruiting species .</p>
      <p>Regardless if you're a beginner or an experienced plant enthusiast, we have something for everyone</p>
      

     <h2> </h2>
      <p>Our mission is to provide a platform for plant enthusiasts to share their knowledge and passion for tropical plants.</p>
      <ul>
        <li>
          Exotic and Tropical Fruit Trees
         <li>Indoor Ornimentals</li>
          <ul>
            <li>
              <Link to="/plants">Explore our plants</Link>
            </li>
          </ul>
        </li>
      </ul>
    <Footer>
      <small>Copyright © 2023 || all rights reserved </small>
    </Footer>

    </div>
  );
};

export default HomePage;

