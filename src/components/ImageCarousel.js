import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/imageCarousel.css";

const ImageCarousel = () => (
  <Carousel
    showArrows={true}
    infiniteLoop={true}
    showThumbs={false}
    autoPlay
    className="carousel"
  >
    <img alt="" src="images/temp/dish.jpg" />

    <img alt="" src="images/temp/fourFish.jpg" />

    <img alt="" src="images/temp/octopus.jpg" />
  </Carousel>
);
export default ImageCarousel;
