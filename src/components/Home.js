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
            <h1>Closed Mondays</h1>
            <h1>Open Sun - Thur</h1>
            <h2>10:30am - 10pm</h2>
            <h1>Open Fri - Sat</h1>
            <h2>10:30am - 12am</h2>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};
export default Home;
