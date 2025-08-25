import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar fixed-top navbar-expand-lg">
      <div className="container-fluid">
        <div className="navbar-brand">
          <p>Sana Farooq</p>
        </div>
        <button className="toggle-btn bg-light" onClick={() => setOpen(!open)}>
          {open ? "✖" : "☰"}
        </button>
        <ul className={`nav-links ${open ? "show" : ""}`}>
          <li className="nav-item">
            <NavLink className="nav-link" to="/" end onClick={() => setOpen(false)}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/About" onClick={() => setOpen(false)}>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Experience" onClick={() => setOpen(false)}>
              Experience
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Skills" onClick={() => setOpen(false)}>
              Skills
            </NavLink>
          </li>
           <li className="nav-item">
            <NavLink className="nav-link" to="/Projects" onClick={() => setOpen(false)}>
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Contact" onClick={() => setOpen(false)}>
              Contact
            </NavLink>
          </li>
           
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

