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
        <Link to="/" className="link">
          <h1>Home</h1>
        </Link>
        <Link to="/menu" className="link">
          <h1>Menu</h1>
        </Link>
        {/* no specials available as of right now */}
        {/* <Link to="/specials" className="link">
          <h1>Specials</h1>
        </Link> */}
        
        <Link to="/about" className="link">
          <h1>About</h1>
        </Link>
        {/* <Link to="/contact" className="link">
          <h1>Contact</h1>
        </Link>
        <Link to="/careers" className="link">
          <h1>Careers</h1>
        </Link> */}
      </nav>
    </>
  );
};
export default Navbar;
