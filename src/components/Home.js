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
            <img src="images/items/items3.webp" alt="a couple of beers" />
          </div>
          <div className="item">
            <img src="images/drinks/drinks2.webp" alt="caguamas" />
          </div>
          <div className="item">
            <img src="images/drinks/drinks3.webp" alt="fish" />
          </div>
        </div>
        <div className="featured">
          <img src="images/outImage.webp" alt="front of restaurant" />
          <img src="images/poster.webp" alt="clamato" />
          <img src="images/temp/plantRestaurant.jpg" alt="placeholder" />
          <Link to="menu">
            <button>Our Menu</button>
          </Link>
        </div>
        <div className="ingredients">
          <h1>Fresh & Local Ingredients</h1>
          <img src="images/items/items9.webp" alt="seafood" />
        </div>
        <Footer />
      </main>
    </>
  );
};
export default Home;
