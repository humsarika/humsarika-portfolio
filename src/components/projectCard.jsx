import React from "react";
import "../styles/project.css";

const ProjectCard = ({ title, techStack,image, description, github, demo }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-img" />
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tech-stack">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {github && <a href={github} target="_blank" rel="noreferrer">GitHub</a>}
          {demo && <a href={demo} target="_blank" rel="noreferrer">Live Demo</a>}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
