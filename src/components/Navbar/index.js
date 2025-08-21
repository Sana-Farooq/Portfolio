import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar fixed-top navbar-expand-lg">
      <div className="container-fluid d-flex justify-content-between">
        <div className="navbar-brand align-items-center">
          <p>Sana Farooq</p>
        </div>
        <button className="toggle-btn" onClick={() => setOpen(!open)}>
          {open ? "✖" : "☰"}
        </button>
        <ul className={`nav-links ${open ? "show" : ""}`}>
          <li className="nav-item">
            <NavLink className="nav-link" to="/" end>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/About">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Experience">
              Experience
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Skills">
              Skills
            </NavLink>
          </li>
           <li className="nav-item">
            <NavLink className="nav-link" to="/Projects">
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Contact">
              Contact
            </NavLink>
          </li>
           
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

