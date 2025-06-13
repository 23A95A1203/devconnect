// src/components/Navbar.js
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png'; // 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="DevConnect" className="logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register" className="signup-btn">Sign Up</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
