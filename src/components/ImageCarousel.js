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
      srcSet="images/drinks/drink1-480w.webp 500w,
             images/drinks/drink1-800w.webp 800w"
      sizes="(max-width: 600px) 500px,
            800px"
      src="images/drinks/drink1-800w.webp"
      alt="first drink"
    />
    <img
      srcSet="images/poster-480w.webp 500w,
             images/poster-800w.webp 800w"
      sizes="(max-width: 600px) 500px,
            800px"
      src="images/poster-800w.webp"
      alt="poster"
    />
    <img
      srcSet="images/items/item1-480w.webp 500w,
             images/items/item1-800w.webp 800w"
      sizes="(max-width: 600px) 500px,
            800px"
      src="images/items/item1-800w.webp"
      alt="first drink"
    />
    <img
      srcSet="images/drinks/drink2-480w.webp 480w,
             images/drinks/drink2-800w.webp 800w"
      sizes="(max-width: 600px) 480px,
            800px"
      src="images/drinks/drink2-800w.webp"
      alt="second drink"
    />
    <img
      srcSet="images/items/item2-480w.webp 500w,
             images/items/item2-800w.webp 800w"
      sizes="(max-width: 600px) 500px,
            800px"
      src="images/items/item2-800w.webp"
      alt="first drink"
    />
    <img
      srcSet="images/drinks/drink3-480w.webp 480w,
             images/drinks/drink3-800w.webp 800w"
      sizes="(max-width: 600px) 480px,
            800px"
      src="images/drinks/drink3-800w.webp"
      alt="third drink"
    />
    <img
      srcSet="images/items/item3-480w.webp 500w,
             images/items/item3-800w.webp 800w"
      sizes="(max-width: 600px) 500px,
            800px"
      src="images/items/item3-800w.webp"
      alt="first drink"
    />
    <img
      srcSet="images/drinks/drink4-480w.webp 480w,
             images/drinks/drink4-800w.webp 800w"
      sizes="(max-width: 600px) 480px,
            800px"
      src="images/drinks/drink4-800w.webp"
      alt="third drink"
    />
    <img
      srcSet="images/items/item4-480w.webp 500w,
             images/items/item4-800w.webp 800w"
      sizes="(max-width: 600px) 500px,
            800px"
      src="images/items/item4-800w.webp"
      alt="first drink"
    />
    <img
      srcSet="images/drinks/drink5-480w.webp 480w,
             images/drinks/drink5-800w.webp 800w"
      sizes="(max-width: 600px) 480px,
            800px"
      src="images/drinks/drink5-800w.webp"
      alt="third drink"
    />
    <img
      srcSet="images/items/item5-480w.webp 500w,
             images/items/item5-800w.webp 800w"
      sizes="(max-width: 600px) 500px,
            800px"
      src="images/items/item5-800w.webp"
      alt="first drink"
    />
    <img
      srcSet="images/drinks/drink6-480w.webp 480w,
             images/drinks/drink6-800w.webp 800w"
      sizes="(max-width: 600px) 480px,
            800px"
      src="images/drinks/drink6-800w.webp"
      alt="third drink"
    />
    <img
      srcSet="images/items/item6-480w.webp 500w,
             images/items/item6-800w.webp 800w"
      sizes="(max-width: 600px) 500px,
            800px"
      src="images/items/item6-800w.webp"
      alt="first drink"
    />
    <img
      srcSet="images/items/item7-480w.webp 500w,
             images/items/item7-800w.webp 800w"
      sizes="(max-width: 600px) 500px,
            800px"
      src="images/items/item7-800w.webp"
      alt="first drink"
    />
    <img
      srcSet="images/items/item8-480w.webp 500w,
             images/items/item8-800w.webp 800w"
      sizes="(max-width: 600px) 500px,
            800px"
      src="images/items/item8-800w.webp"
      alt="first drink"
    />
  </Carousel>
);
export default ImageCarousel;
