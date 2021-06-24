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
            <img
              srcSet="images/items/item3-480w.webp 480w,
             images/items/item3.webp 800w"
              sizes="(max-width: 600px) 480px,
            800px"
              src="images/items/item3-800w.webp"
              alt="item 3"
            />
          </div>
          <div className="item">
            <img
              srcSet="images/drinks/drink2-480w.webp 500w,
             images/drinks/drink2-800w.webp 800w"
              sizes="(max-width: 600px) 500px,
            800px"
              src="images/drinks/drink2-800w.webp"
              alt="first drink"
              height="619"
              width="800"
            />
          </div>
          <div className="item">
            <img
              srcSet="images/drinks/drink3-480w.webp 500w,
             images/drinks/drink3-800w.webp 800w"
              sizes="(max-width: 600px) 500px,
            800px"
              src="images/drinks/drink3-800w.webp"
              alt="first drink"
              height="619"
              width="800"
            />
          </div>
        </div>
        <div className="featured">
          <img
            srcSet="images/outImage-480w.webp 500w,
             images/outImage-800w.webp 800w"
            sizes="(max-width: 600px) 500px,
            800px"
            src="images/outImage-800w.webp"
            alt="first drink"
            height="619"
            width="800"
          />
          <img
            srcSet="images/poster-480w.webp 500w,
             images/poster-800w.webp 800w"
            sizes="(max-width: 600px) 500px,
            800px"
            src="images/poster-800w.webp"
            alt="first drink"
            height="619"
            width="800"
          />
          {/* <img src="images/temp/plantRestaurant.jpg" alt="placeholder" /> */}
          <Link to="menu">
            <button>Our Menu</button>
          </Link>
        </div>
        <div className="ingredients">
          <h1>Fresh & Local Ingredients</h1>
          {/* <img
            srcSet="images/items/item9-480w.webp 500w,
             images/items/item9-800w.webp 800w"
            sizes="(max-width: 600px) 500px,
            800px"
            src="images/items/item9-800w.webp"
            alt="first drink"
            height="619"
            width="800"
          /> */}
        </div>
        <Footer />
      </main>
    </>
  );
};
export default Home;
