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
    <img
      srcSet="images/menu0.webp 500w,
             images/menu0.webp 800w"
      sizes="(max-width: 600px) 500px,
            800px"
      src="images/menu0.webp"
      alt="cover"
      height="619"
      width="800"
    />
    <img
      srcSet="images/menu1small.webp 500w,
             images/menu1.webp 800w"
      sizes="(max-width: 600px) 500px,
            800px"
      src="images/menu1.webp"
      alt="aguachiles"
      height="619"
      width="800"
    />
    <img
      srcSet="images/menu2small.webp 500w,
             images/menu2.webp 800w"
      sizes="(max-width: 600px) 500px,
            800px"
      src="images/menu2.webp"
      alt="michelada"
      height="619"
      width="800"
    />
    <img
      srcSet="images/menu3small.webp 500w,
             images/menu3.webp 800w"
      sizes="(max-width: 600px) 500px,
            800px"
      src="images/menu3.webp"
      alt="beer"
      height="619"
      width="800"
    />
    <img
      srcSet="images/menu4small.webp 500w,
             images/menu4.webp 800w"
      sizes="(max-width: 600px) 500px,
            800px"
      src="images/menu4.webp"
      alt="kids menu"
      height="619"
      width="800"
    />
    <img
      srcSet="images/menu5small.webp 500w,
             images/menu5.webp 800w"
      sizes="(max-width: 600px) 500px,
            800px"
      src="images/menu5.webp"
      alt="clamato"
      height="619"
      width="800"
    />
    <img
      srcSet="images/menu6small.webp 500w,
             images/menu6.webp 800w"
      sizes="(max-width: 600px) 500px,
            800px"
      src="images/menu6.webp"
      alt="shrimp cocktail"
      height="619"
      width="800"
    />
    <img
      srcSet="images/menu7small.webp 500w,
             images/menu7.webp 800w"
      sizes="(max-width: 600px) 500px,
            800px"
      src="images/menu7.webp"
      alt="huachinango"
      height="619"
      width="800"
    />
    <img
      srcSet="images/menu8small.webp 500w,
             images/menu8.webp 800w"
      sizes="(max-width: 600px) 500px,
            800px"
      src="images/menu8.webp"
      alt="sampler"
      height="619"
      width="800"
    />
    <img
      srcSet="images/menu9small.webp 500w,
             images/menu9.webp 800w"
      sizes="(max-width: 600px) 500px,
            800px"
      src="images/menu9.webp"
      alt="torre de mariscos"
      height="619"
      width="800"
    />
  </Carousel>
);
export default ImageCarousel;
