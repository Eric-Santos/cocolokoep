import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import "../styles/navbar.css";



const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/" className="link">
          <h1>Home</h1>
        </Link>
        <Link to="/menu" className="link">
          <h1>Menu</h1>
        </Link>
        <Link to="/specials" className="link">
          <h1>Specials</h1>
        </Link>
        <h1>Logo</h1>
        <Link to="/about" className="link">
          <h1>About</h1>
        </Link>
        <Link to="/contact" className="link">
          <h1>Contact</h1>
        </Link>
        <Link to="/careers" className="link">
          <h1>Careers</h1>
        </Link>
      </nav>
      <div className="mobile-menu-bar">
        <h1>Logo</h1>
        <HiOutlineMenu className="menu-icon" size="30" />
      </div>
    </>
  );
};
export default Navbar;
