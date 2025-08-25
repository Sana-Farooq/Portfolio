import React from 'react'
import './About.css';
import aboutMe from '../../assets/aboutMe.jpeg';
function About() {
  return (
    <div className="container-fluid py-5">
      <div className="row" >
        <div className="ColumnImage col-lg-6">
          <img className="Aboutme" src={aboutMe} alt='About ME' />
        </div>
        <div className='ColumnContent col-lg-6'>
          <h1 className="AboutHeading">➜  Personal Information</h1>
          <p className="name"><span className="strong-text">Name: </span>Sana Farooq</p>
          <p className="address"><span className="strong-text">Location: </span>Bahawalpur, Pakistan</p>
          <p className="email"><span className="strong-text">Email: </span>sf4563496@gmail.com</p>
          <h1 className="AboutHeading">➜  Front End Developer</h1>
          <ul className="FrontEnd">
            <li>Building interactive, user-focused web experiences with modern JavaScript.</li>
            <li>Hands-on knowledge of React, covering components, state management, and API integration, with ongoing exploration of advanced concepts.</li>
            <li>Translating design into elegant, performant and accessible code.</li>
            <li>Turning Figma files into functional websites.</li>
            <li>Where creativity meets code</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
