import React from "react";
import "../styles/skills.css";
import "../index.css"; // Import your global CSS file

const skillsData = [
  {
    category: "Programming Languages",
    items: ["JavaScript", "Python", "C++", "C"],
  },
  {
    category: "Frontend Development",
    items: ["HTML", "CSS", "JavaScript","Bootstrap", "Jquery", "React.js", "Figma"],
  },
  {
    category: "Backend & Database",
    items: ["Node.js", "Express.js", "MongoDB","Mysql", "REST APIs"],
  },
  {
    category: "Auth & Security",
    items: ["Passport.js", "JWT", "Bcrypt.js"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "Postman", "Vercel", "Netlify", "MongoDB Atlas", "Google Cloud"],
  },
  {
    category: "ML & Data Analysis",
    items: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn"],
  },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title-light">Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skillGroup, index) => (
          <div key={index} className="skill-card">
            <h3>{skillGroup.category}</h3>
            <div className="skill-list">
                {skillGroup.items.map((skill, index) => (
                    <div key={index} className="skill-item">{/* <div className="skill-icon"></div> */}
                        <span>{skill}</span>
                        </div>
                ))}

            </div>
              
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
