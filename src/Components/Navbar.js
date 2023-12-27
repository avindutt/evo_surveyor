import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/view-data" className="nav-link">Submission List</Link>
      </div>
    </nav>
  );
};

export default Navbar;
