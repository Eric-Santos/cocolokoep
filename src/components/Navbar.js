import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import "../styles/navbar.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  }

  return (
    <>
      <div className="mobile-menu-bar">
        <Link to="/" className="link">
          <img src="logo48.png" alt="logo" />
        </Link>
        <HiOutlineMenu className="menu-icon" size="30" onClick={handleClick} />
      </div>
      <nav className={isActive ? "open" : null}>
        <h1>CocoLoko</h1>
        <Link to="/" className="link">
          <h4>Home</h4>
        </Link>
        <Link to="/menu" className="link">
          <h4>Menu</h4>
        </Link>
        <Link to="/about" className="link">
          <h4>About</h4>
        </Link>
      </nav>
    </>
  );
};
export default Navbar;
