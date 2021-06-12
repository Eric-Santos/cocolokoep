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
    <div>
      <img alt="" src="images/placeholderFish.jpg" />
    </div>
    <div>
      <img alt="" src="images/placeholderFish.jpg" />
    </div>
    <div>
      <img alt="" src="images/placeholderFish.jpg" />
    </div>
  </Carousel>
);
export default ImageCarousel;
