import React from 'react'
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaFigma  } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

function Skills() {
  return (
       <div className="skills-section">
      <h2 className="skills-title">Skills&Technologies</h2>
      <div className="skills-icons">
        <FaHtml5 className="skill-icon html" />
        <FaCss3Alt className="skill-icon css" />
        <IoLogoJavascript className="skill-icon js" />
         <FaFigma className="skill-icon figma" />
        <FaBootstrap className="skill-icon bootstrap" />
        <FaReact className="skill-icon react" />
      </div>
    </div>
  )
}

export default Skills;

  