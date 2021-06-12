import React from "react";
import "../styles/menu.css";
import Navbar from "./Navbar";

const Menu = () => {
  return (
    <div>
      <Navbar />
      <picture>
        <img
          srcset="images/menu0small.wepb 324w,
             images/menu0.webp 400w"
          sizes="(max-width: 600px) 324px,
            400px"
          src="images/menu0.webp"
          alt="first page of menu"
        />
        <img
          srcset="images/menu1small.wepb 324w,
             images/menu1.webp 400w"
          sizes="(max-width: 600px) 324px,
            400px"
          src="images/menu1.webp"
          alt="first page of menu"
        />
        <img
          srcset="images/menu2small.wepb 324w,
             images/menu2.webp 400w"
          sizes="(max-width: 600px) 324px,
            400px"
          src="images/menu2.webp"
          alt="first page of menu"
        />
        <img
          srcset="images/menu3small.wepb 324w,
             images/menu3.webp 400w"
          sizes="(max-width: 600px) 324px,
            400px"
          src="images/menu3.webp"
          alt="first page of menu"
        />
        <img
          srcset="images/menu4small.wepb 324w,
             images/menu4.webp 400w"
          sizes="(max-width: 600px) 324px,
            400px"
          src="images/menu4.webp"
          alt="first page of menu"
        />
        <img
          srcset="images/menu5small.wepb 324w,
             images/menu5.webp 400w"
          sizes="(max-width: 600px) 324px,
            400px"
          src="images/menu5.webp"
          alt="first page of menu"
        />
        <img
          srcset="images/menu6small.wepb 324w,
             images/menu6.webp 400w"
          sizes="(max-width: 600px) 324px,
            400px"
          src="images/menu6.webp"
          alt="first page of menu"
        />
        <img
          srcset="images/menu7small.wepb 324w,
             images/menu7.webp 400w"
          sizes="(max-width: 600px) 324px,
            400px"
          src="images/menu7.webp"
          alt="first page of menu"
        />
        <img
          srcset="images/menu8small.wepb 324w,
             images/menu8.webp 400w"
          sizes="(max-width: 600px) 324px,
            400px"
          src="images/menu8.webp"
          alt="first page of menu"
        />
        <img
          srcset="images/menu9small.wepb 324w,
             images/menu9.webp 400w"
          sizes="(max-width: 600px) 324px,
            400px"
          src="images/menu9.webp"
          alt="first page of menu"
        />
      </picture>
    </div>
  );
};
export default Menu;
