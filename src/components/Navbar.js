import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo">
                HappyTails <i className="fa-solid fa-cat"></i>
            </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar
