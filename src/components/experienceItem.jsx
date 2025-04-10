import React from "react";
import "../styles/experience.css";
// import experienceData from "../data/experienceData";

const ExperienceItem = ({ company, role, dateRange, location, details }) => {
  return (
    <>
      <div className="experience-entry">
        <div className="experience-header">
          <div className="experience-left">
            <strong>{company}</strong><br />
            — {role}
          </div>
          <div className="experience-right">
            {dateRange}<br />
            {location}<br />

          </div>
        </div>
        <div className="experience-details">
          
          {details.map((point, index) => (
            <div key={index}>• {point}</div>
          ))}
        </div>
      </div>
      <hr className="experience-divider" />
    </>
  );
};

export default ExperienceItem;
