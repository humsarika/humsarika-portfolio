import { useState } from "react";
import "../styles/navbar.css"; 
const Navbar = ({ onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar-container">
      <nav className="navbar">
       
        <div className="logo">Sarika Kushwaha.</div>

      
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </div>

        {/* Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#education" onClick={() => setIsOpen(false)}>Education</a></li>
          <li><a href="#experience" onClick={() => setIsOpen(false)}>Experience</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="#certificate" onClick={() => setIsOpen(false)}>Certificate</a></li>
  
          <li><a onClick={onContactClick} style={{ cursor: 'pointer' }}>Contact</a></li>

        </ul>
  
      </nav>
    </div>
  );
};

export default Navbar;
