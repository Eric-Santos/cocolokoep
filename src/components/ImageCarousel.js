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
    <img alt="poster" src="images/poster.webp" />
    <img src="images/drinks/drinks1.webp" alt="beer" />
    <img src="images/items/items1.webp" alt="fries" />
    <img src="images/drinks/drinks2.webp" alt="beer" />
    <img src="images/items/items2.webp" alt="fries" />
    <img src="images/drinks/drinks3.webp" alt="beer" />
    <img src="images/items/items3.webp" alt="fries" />
    <img src="images/drinks/drinks4.webp" alt="beer" />
    <img src="images/items/items5.webp" alt="fries" />
    <img src="images/drinks/drinks5.webp" alt="beer" />
    <img src="images/items/items6.webp" alt="fries" />
    <img src="images/drinks/drinks6.webp" alt="beer" />
    <img src="images/items/items7.webp" alt="fries" />
    <img src="images/items/items8.webp" alt="fries" />
    <img src="images/items/items9.webp" alt="fries" />
  </Carousel>
);
export default ImageCarousel;
