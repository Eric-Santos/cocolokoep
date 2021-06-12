import React from "react";
import "../styles/home.css";
import Navbar from "./Navbar";
import ImageCarousel from "./ImageCarousel";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="home">
        <div className="hero">
          <ImageCarousel />
        </div>
        <div className="featured">
          <h1>Featured Section</h1>
        </div>
      </main>
    </>
  );
};
export default Home;
