// components/Education.jsx
import React from 'react';
import '../styles/education.css';


const Education = () => {
    return (
        <section className="education-section" id='education'>
            <h2 className="section-title-dark">Education</h2>

            <div className="education-timeline">

                <div className="education-card">
                    <div className="education-right">

                        <div className="education-institute"> Jaypee University of Engineering & Technology</div>
                        <div className="education-degree">B.Tech in Computer Science Engineering</div>
                        <div className="education-score">CGPA: 7.4/10</div>
                        <ul>
                            <li>Developed strong foundation in Data Structures, Web Development, and Backend Engineering.</li>
                            <li>Completed multiple hands-on projects and internships.</li>
                            <li>Explored Machine Learning and Competitive Coding during early years.</li>
                            <li>Graduated with a full academic scholarship.</li>

                        </ul>
                    </div>

                    <div className="education-left">
                        <div className="education-year">2020 - 2024</div>
                        <div className="education-location">Guna, Madhya Pradesh</div>

                    </div>
                </div>

                <div className="education-card ">
                    <div className="education-right">

                        <div className="education-institute">Sardar Patel H. S. School</div>
                        <div className="education-degree">12th Grade (PCM)</div>
                        <div className="education-score">Percentage: 87.6%</div>
                        <ul>
                            <li>Achieved 2nd rank.</li>
                            <li>Secured 100% scholarship for engineering studies.</li>
                            <li>Focused on Physics, Chemistry, Mathematics</li>
                        </ul>
                    </div>

                    <div className="education-left">
                        <div className="education-year">2019 - 2020</div>
                        <div className="education-location">Rewa, Madhya Pradesh</div>

                    </div>
                </div>

                <div className="education-card ">
                    <div className="education-right">

                        <div className="education-institute">Sardar Patel H. S. School</div>
                        <div className="education-degree">10th Grade</div>
                        <div className="education-score">Percentage: 91.4%</div>
                        <ul>
                            <li>Secured 3rd rank.</li>
                        </ul>
                    </div>

                    <div className="education-left">
                        <div className="education-year">2017 - 2018</div>
                        <div className="education-location">Rewa, Madhya Pradesh</div>
                    </div>
                </div>

            </div>
        </section>


    );
};

export default Education;
