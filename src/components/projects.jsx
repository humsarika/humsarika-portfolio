import React from "react";
import ProjectCard from "./projectCard";
import projectData from "../data/projectData";
import "../styles/project.css";


const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title-dark">Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
