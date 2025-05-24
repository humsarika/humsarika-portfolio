import React from "react";
import "../styles/hero.css";
import profilePic from "../assets/images/sarika_profile.jpg"; 
import resumeFile from "../assets/files/Sarika_Kushwaha_Resume_January.pdf";

const Hero = ({ onContactClick }) => {
    const handleResumeClick = () => {
      window.open(resumeFile, "_blank");
    };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>
          Hey <span className="wave">👋</span>,<br />I'm <span className="highlight">Sarika Kushwaha</span>
        </h1>
        
        <p>I build seamless digital experiences, crafting both the frontend and backend with precision and creativity. </p>

        <div className="hero-buttons">
          <button onClick={onContactClick}  className="btn contact-me">Contact Me</button>
          <button onClick={handleResumeClick} className="btn view-resume">Resume</button>
        </div>
      </div>
      <div className="hero-image-container">
        <img src={profilePic} alt="profile pic Sarika Image" />
      </div>
    </section>
  );
};

export default Hero;


