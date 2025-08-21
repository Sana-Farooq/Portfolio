import React from 'react'
import './Home.css';
import { useNavigate } from 'react-router-dom';
import  GirlPic from '../../assets/GirlPic.png';



function Home() {
  const navigate= useNavigate();
  const HandleNavigationtoContactPage=() =>{

    navigate('/Contact');
  }
  return (
      <div className='row w-100'>
        <div className='ColumnContent col-lg-6'>
            <h3>Hey, I am Sana</h3>
            <h3>Frontend Developer & UI Enthusiast</h3>
            <p>I build clean, responsive web interfaces using HTML, CSS, JavaScript, and React.</p>
            <button>Find My Resume</button>
            <button onClick={HandleNavigationtoContactPage}>Contact Me</button>
        </div>
        <div className=' ColumnImage col-lg-6'>
           <img className='profilePic' src={GirlPic} alt='profilePic'/>
        </div>
      </div>
  )
}

export default Home
