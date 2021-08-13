import React from "react";
import "../styles/home.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ImageCarousel from "./ImageCarousel";
// import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="home">
        <div className="hero">
          <ImageCarousel />
        </div>
        <div className="hours">
          <div className="text">
            <h1>Open Tue - Sun</h1>
            <h2>10:30am - 10pm</h2>
          </div>
        </div>

        {/* Imgae Gallery Section */}
        {/* <h1 className="foods-title">Food and Drinks</h1> */}
        {/* <div className="gallery"> */}
        {/* <div className="item">
            <img
              srcSet="images/menu1small.webp 480w,
             images/menu1.webp 800w"
              sizes="(max-width: 600px) 480px,
            800px"
              src="images/menu1.webp"
              alt="first drink"
              height="619"
              width="800"
            />
            <img
              srcSet="images/menu1small.webp 480w,
             images/menu1.webp 800w"
              sizes="(max-width: 600px) 480px,
            800px"
              src="images/menu1.webp"
              alt="first drink"
              height="619"
              width="800"
            />
            <img
              srcSet="images/menu1small.webp 480w,
             images/menu1.webp 800w"
              sizes="(max-width: 600px) 480px,
            800px"
              src="images/menu1.webp"
              alt="first drink"
              height="619"
              width="800"
            />
            <img
              srcSet="images/menu1small.webp 480w,
             images/menu1.webp 800w"
              sizes="(max-width: 600px) 480px,
            800px"
              src="images/menu1.webp"
              alt="first drink"
              height="619"
              width="800"
            />
            <img
              srcSet="images/menu1small.webp 480w,
             images/menu1.webp 800w"
              sizes="(max-width: 600px) 480px,
            800px"
              src="images/menu1.webp"
              alt="first drink"
              height="619"
              width="800"
            />
          </div>
          <div className="item">
            <img
              srcSet="images/drinks/drink2-480w.webp 480w,
             images/drinks/drink2-800w.webp 800w"
              sizes="(max-width: 600px) 480px,
            800px"
              src="images/drinks/drink2-800w.webp"
              alt="first drink"
              height="619"
              width="800"
            />
          </div>
          <div className="item">
            <img
              srcSet="images/drinks/drink3-480w.webp 480w,
             images/drinks/drink3-800w.webp 800w"
              sizes="(max-width: 600px) 480px,
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
            srcSet="images/outImage-480w.webp 480w,
             images/outImage-800w.webp 800w"
            sizes="(max-width: 600px) 480px,
            800px"
            src="images/outImage-800w.webp"
            alt="first drink"
            height="619"
            width="800"
          />
          <img
            srcSet="images/poster-480w.webp 480w,
             images/poster-800w.webp 800w"
            sizes="(max-width: 600px) 480px,
            800px"
            src="images/poster-800w.webp"
            alt="first drink"
            height="619"
            width="800"
          />
          <Link to="menu">
            <button>Our Menu</button>
          </Link>
        </div>
        <div className="ingredients">
          <h1>Fresh & Local Ingredients</h1>
          <img
            srcSet="images/items/item8-480w.webp 480w,
             images/items/item8-800w.webp 800w"
            sizes="(max-width: 600px) 480px,
            800px"
            src="images/items/item8-800w.webp"
            alt="first drink"
            height="619"
            width="800"
          /> */}
        {/* </div> */}
        <Footer />
      </main>
    </>
  );
};
export default Home;
