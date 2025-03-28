import { useState } from "react";
import "../styles/navbar.css"; // Import your CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar-container">
      <nav className="navbar">
        {/* <div className="nav-container"> */}
          <div className="logo">Humsarika</div>

          {/* Hamburger Menu */}
          <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "✖" : "☰"}
          </div>

          {/* Links */}
          <ul className={`nav-links ${isOpen ? "open" : ""}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        {/* </div> */}
      </nav>
    </div>
  );
};

export default Navbar;
