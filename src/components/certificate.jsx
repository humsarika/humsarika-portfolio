import React, { useState } from "react";
import certificates from "../data/certificateData";
import "../styles/certificate.css";

const Certificate = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="certificate-section" id="certificate">
      <h2 className="section-title-dark" >Certificates</h2>
      <div className="accordion">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className={`accordion-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggle(index)}
          >
            <div className="accordion-title">
              <p>{cert.title}</p>
              <span>{activeIndex === index ? "close" : <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/chevron-down.png" alt="chevron-down"/>}</span>
            </div>
            {activeIndex === index && (
              <div className="accordion-content">
                <p><strong>Issued By:</strong> {cert.platform}</p>
                <p><strong>Date:</strong> {cert.date}</p>
                <a href={cert.filelink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} >
  View Certificate
</a>

              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
