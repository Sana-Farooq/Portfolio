import React from 'react'
import './About.css';
import  aboutMe from '../../assets/aboutMe.jpeg';
function About() {
  return (
    <div className='row w-100'>
             <div className=' ColumnImage col-lg-6'>
               <img className='profilePic' src={aboutMe} alt='About ME'/>
            </div>
            <div className='ColumnContent col-lg-6'>
                <h1>➜  Personal Information</h1>
                 <p className="name"><span className="strong-text">Name: </span>Sana Farooq</p>
                 <p className="age"><span className="strong-text">Age: </span>25</p>
                 <p className="address"><span className="strong-text">Location: </span>Pakistan</p>
                 <p className="email"><span className="strong-text">Email: </span>sf4563496@gmail.com</p>
                 <p className="contact"><span className="strong-text">Contact No.: </span>0301-8538797</p>
                <h1>➜  Front End Developer</h1>
                 <ul className="FrontEnd">
                  <li>Building interactive, user-focused web experiences with modern JavaScript.</li>
                  <li>Translating design into elegant, performant and accessible code.</li>
                  <li>Turning Figma files into functional websites.</li>
                  <li>Where creativity meets code</li>
                 </ul>
            </div>
            
          </div>
  )
}

export default About
