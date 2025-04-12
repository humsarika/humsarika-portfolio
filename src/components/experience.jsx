
import React from 'react';
import experienceData from '../data/experienceData';
import ExperienceItem from './experienceItem';


import '../styles/experience.css';

const Experience = () => {
  return (
    <section className="experience-section" id='experience'>
    <h2 className="section-title-light">Internship Experience</h2>
    {experienceData.map((item, index) => (
      <ExperienceItem key={index} {...item} />
    ))}
  </section>
  );
};

export default Experience;
