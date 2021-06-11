import React from "react";
import "../styles/home.css";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="home">
        <div className="hero">
          <h1>Open Daily</h1>
        </div>
        <div className="featured">
          <h1>Featured Section</h1>
        </div>
      </main>
    </>
  );
};
export default Home;
