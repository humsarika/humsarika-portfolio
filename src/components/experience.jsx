// components/Experience.jsx
import React from 'react';
import experienceData from '../data/experienceData';
import ExperienceItem from './experienceItem';


import '../styles/experience.css';

const Experience = () => {
  return (
    <div className="experience-section">
    <h2 className="section-title-light">Internship Experience</h2>
    {experienceData.map((item, index) => (
      <ExperienceItem key={index} {...item} />
    ))}
  </div>
  );
};

export default Experience;
