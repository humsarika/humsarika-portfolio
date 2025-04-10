import React from "react";
import ProjectCard from "./projectCard";
import projectData from "../data/projectData";
import "../styles/project.css";


const Projects = () => {
  return (
    <div className="projects-section">
      <h2 className="section-title-dark">Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
