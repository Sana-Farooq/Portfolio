import './App.css';
import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';


function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='About' element={<About/>} />
    <Route path='Experience' element={<Experience/>} />
    <Route path='Contact' element={<Contact/>} />
    <Route path='Skills' element={<Skills/>} />
    <Route path='Projects' element={<Projects/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App


