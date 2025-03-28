import React from "react";
import "../styles/hero.css";
import profilePic from "../assets/images/sarika_profile.jpg"; // Replace with your actual image path

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Hey <span className="wave">👋</span>,<br />I'm <span className="highlight">Sarika Kushwaha</span>
        </h1>
        
        <p>I build seamless digital experiences, crafting both the frontend and backend with precision and creativity. </p>

        <div className="hero-buttons">
          <button className="btn hire-me">Hire Me</button>
          <button className="btn view-projects">See My Work</button>
        </div>
      </div>
      <div className="hero-image-container">
        <img src={profilePic} alt="Sarika Image" />
      </div>
    </section>
  );
};

export default Hero;

{/* <p>
          a <b>Computer Science graduate</b> who loves turning ideas into real applications. My main focus is <b>backend development</b>,
          where I build secure and scalable systems that make web apps run smoothly.
        </p>
        <p>
          I started my journey exploring different areas like <b>competitive coding, AI/ML, and web development</b>,
          but I eventually found my passion in <b>backend engineering</b>. I enjoy working with <b>databases, APIs,
            and authentication systems</b> to create seamless user experiences.
        </p>
        <p>
          When I'm not coding, you'll find me learning something new, staying active, or enjoying a good cup of **chai** ☕.
          I'm always open to new opportunities and excited to grow as a **developer**. 🚀
        </p> */}
