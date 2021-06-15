import React from "react";
import "../styles/footer.css";
import { FaFacebookSquare, FaSnapchat, FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const Footer = () => {
  return (
    <>
    <footer>
      <h1>Logo</h1>
      <h1>Follow Us</h1>
      <div className="icons">
        <SiTiktok size="30" className="icon" />
        <FaFacebookSquare size="30" className="icon" />
        <FaInstagram size="30" className="icon" />
        <FaSnapchat size="30" className="icon" />
      </div>
      
    </footer>
    <div className="copyright">
    <h4>
      &copy; Copyright 2021 | Crafted By{" "}
      <a
        href="https://www.linkedin.com/in/ericsantos01/"
        target="_blank"
        rel="noreferrer noopener"
      >
        Eric Santos
      </a>
    </h4>
  </div>
    </>
  );
};
export default Footer;
