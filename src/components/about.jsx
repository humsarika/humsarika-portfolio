import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h2 className="section-title-light">About Me</h2>
        <h2 className="about-intro">
          Hi there! I'm <span className="highlight-about-text">Sarika Kushwaha</span>
           
        </h2>
        <p>
          a <span className="highlight-about-text">Computer Science graduate</span> who loves turning ideas into real applications. My main focus is <span className="highlight-about-text">backend development</span>,
          where I build secure and scalable systems that make web apps run smoothly.
        </p>
        <p>
          I started my journey exploring different areas like <span className="highlight-about-text">competitive coding, AI/ML, and web development</span>,
          but I eventually found my passion in <span className="highlight-about-text">backend engineering</span>. I enjoy working with <span className="highlight-about-text">databases, APIs,
            and authentication systems</span> to create seamless user experiences.
        </p>
        <p>
          When I'm not coding, you'll find me learning something new, staying active, or enjoying a good cup of chai ☕.
          I'm always open to new opportunities and excited to grow as a developer. 🚀
        </p>
      </div>
    </section>
  );
};

export default About;