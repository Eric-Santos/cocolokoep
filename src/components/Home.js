import React from "react";
import "../styles/home.css";
import Navbar from "./Navbar";
import {Link} from 'react-router-dom'
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
          <h1>Featured Item 1</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            culpa nihil harum magnam dolor perferendis aliquam sit vitae dolores
            ipsam laboriosam tenetur. Ea consectetur nobis incidunt minus esse
            praesentium, distinctio aliquam nulla corrupti repellat, voluptatem
            neque voluptate molestias nemo porro!
          </p>
          <h1>Featured Item 2</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            culpa nihil harum magnam dolor perferendis aliquam sit vitae dolores
            ipsam laboriosam tenetur. Ea consectetur nobis incidunt minus esse
            praesentium, distinctio aliquam nulla corrupti repellat, voluptatem
            neque voluptate molestias nemo porro!
          </p>
          <h1>Featured Item 3</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            culpa nihil harum magnam dolor perferendis aliquam sit vitae dolores
            ipsam laboriosam tenetur. Ea consectetur nobis incidunt minus esse
            praesentium, distinctio aliquam nulla corrupti repellat, voluptatem
            neque voluptate molestias nemo porro!
          </p>
          <h1>Featured Item 4</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            culpa nihil harum magnam dolor perferendis aliquam sit vitae dolores
            ipsam laboriosam tenetur. Ea consectetur nobis incidunt minus esse
            praesentium, distinctio aliquam nulla corrupti repellat, voluptatem
            neque voluptate molestias nemo porro!
          </p>
          <Link to='menu'><button>See Our Menu</button></Link>
        </div>
        
      </main>
    </>
  );
};
export default Home;
