import React from 'react'
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import './Experience.css';
import { MdSubject } from 'react-icons/md';

  const educationData = [
  { year: "2016 - 2018", title: "Intermediate Degree" ,subject: "ICS",desc: "Division: 1st" },
  { year: "2018 - 2020", title: "Bachelor's Degree" ,subject: "B.Sc(Double Computer)",desc: "Division: 1st" },
  { year: "2020 - 2022", title: "Master's Degree", subject: "MCS" ,desc: "CGPA: 3.84" },
];

const workData = [
  { year: "May 2025 - ongoing",
    title: "Front-End Development Intern", 
    Company: "Software House: TechSpark",
    desc: "Worked on real-world web projects using React, JavaScript, Figma, Html and CSS. Gained hands-on experience with GitHub and responsive design.", 
   
  },
  { year: "2025 - present", title: "Front-End Developer",status:"Status: Personal Projects", desc: "•Building responsive websites with React, JavaScript, and Bootstrap.\n•Experienced in API integration, Git/GitHub version control.\n•Developing reusable and efficient code for real-world projects."},
  { year: "2025 - present", title: "Back-End Developer", desc: "Focused on front-end development while actively exploring backend technologies to transition into full-stack development" },
];


function Experience() {
  return (
    <div className="experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="experience-container">
        <div className="experience-column">
          {educationData.map((item, index) => (
            <div key={index} className="experience-card">
              <div className="timeline-icon"><FaGraduationCap /></div>
              <span className="timeline-year">{item.year}</span>
              <h3 className="experience-title">{item.title}</h3>
              <p className="experience-desc">{item.subject}</p>
              <p className="experience-desc">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="experience-column">
          {workData.map((item, index) => (
            <div key={index} className="experience-card">
              <div className="timeline-icon"><FaBriefcase /></div>
              <span className="timeline-year">{item.year}</span>
              <h3 className="experience-title">{item.title}</h3>
              <p className="experience-desc">{item.desc}</p>
               <p className="experience-desc">{item.Company}</p>
               <p className="experience-desc">{item.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;