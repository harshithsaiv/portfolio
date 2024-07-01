import React from 'react';
import './Experience.css';

const experiences = [
  {
    title: "Cybersecurity Graduate Assistant",
    company: "California State University Sacramento",
    type: "Part Time",
    duration: "June 2024 - Present"
  },
  {
    title: "Research Fellowship",
    company: "Curtin University",
    type: "Research",
    duration: "October 2022 - Present"
  },
  {
    title: "Cyber Security Engineer",
    company: "REINFOSEC",
    type: "Internship",
    duration: "Sept 2022 - Dec 2022"
  },
  {
    title: "JAVA Associate",
    company: "The Entrepreneurship Network",
    type: "Internship",
    duration: "Aug 2021 - Jan 2022"
  },
  {
    title: "AWS Cloud Intern",
    company: "AICTE",
    type: "Internship",
    duration: "Oct 2021 - Dec 2021"
  }
];

const Experience = () => {
  return (
    <div className="experience-container">
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <h4>{exp.company} • {exp.type}</h4>
              <p>{exp.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
