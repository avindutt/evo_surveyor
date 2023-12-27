import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="nav-link">Home</Link>
        <div>
        <Link to="/login" className="nav-link">Login &nbsp;&nbsp;&nbsp;&nbsp; |</Link>
        <Link to="/register" className='nav-link' >Register</Link>
        </div>
        <Link to="/view-data" className="nav-link">Submission List</Link>
      </div>
    </nav>
  );
};

export default Navbar;
