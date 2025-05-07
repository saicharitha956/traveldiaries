import React from 'react'; 
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Assuming 'authToken' is your key
    navigate('/login'); // Redirect directly to the login page
    console.log('Logout successful'); // For debugging
  };

  return (
    <nav className="navbar">
      <Link to="/home" className="navbar-title">Travel Diaries</Link>
      <div className="navbar-links">
        <Link to="/add"><b>Add Story</b></Link>
        <Link to="/hotels"><b>Hotels</b></Link>
        <Link to="/mood-tracker"><b>Mood Tracker</b></Link> {/* ✅ Added Mood Tracker link */}
        <button onClick={handleLogout}><b>Logout</b></button>
      </div>
    </nav>
  );
};

export default Navbar;
