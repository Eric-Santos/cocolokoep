import React from "react";
import "../styles/home.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {Link} from 'react-router-dom'
import ImageCarousel from "./ImageCarousel";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="home">
        <div className="hero">
          <h1>Coco Loko</h1>
          <ImageCarousel />
        </div>
        <div className="hours">
          <h1>Open Wed - Sunday</h1>
          <h2>Noon - 10pm</h2>
        </div>

        {/* Imgae Gallery Section */}
        <h1 className="foods-title">Food and Drinks</h1>
        <div className="gallery">
          <div className="item">
            <img src="images/temp/placeholderFish.jpg" alt="fish" />
          </div>
          <div className="item">
            <img src="images/temp/placeholderFish.jpg" alt="fish" />
          </div>
          <div className="item">
            <img src="images/temp/placeholderFish.jpg" alt="fish" />
          </div>
        </div>
        <div className="featured">
          <h1>Our Specialty</h1>
          <img src="images/temp/restaurant.jpg" alt="placeholder" />
          <img src="images/temp/placeholderFish.jpg" alt="placeholder" />
          <img src="images/temp/plantRestaurant.jpg" alt="placeholder" />
          <Link to="menu">
            <button>Our Menu</button>
          </Link>
        </div>
        <div className="ingredients">
          <h1>Fresh & Local Ingredients</h1>
          <img src="images/temp/placeholderFish.jpg" alt="placeholder" />
        </div>
        <Footer />
      </main>
    </>
  );
};
export default Home;
