import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.Module.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Left Section: Footer Text */}
        <div className="footer-text">
          <p>Shakil Market, near Nasar Medical, Araria</p>
          {/* <p>Email: info@findever.com | </p> */}
          <p>+91 9006870168</p>
        </div>

        {/* Center Section: Navigation Links */}
        <div className="footer-navigation">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>
            Services
          </NavLink>
          <NavLink to="/about-us" className={({ isActive }) => (isActive ? 'active' : '')}>
            About Us
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : '')}>
            Blog
          </NavLink>
          <NavLink to="/contact-us" className={({ isActive }) => (isActive ? 'active' : '')}>
            Contact Us
          </NavLink>
        </div>

         {/* Disclaimer, Terms, and Privacy */}
      <div className="footer-links">
        <NavLink to="/disclaimer" className={({ isActive }) => (isActive ? 'active' : '')}>
          Disclaimer
        </NavLink>
        <NavLink to="/terms-and-condition" className={({ isActive }) => (isActive ? 'active' : '')}>
          Terms & Conditions
        </NavLink>
        <NavLink to="/privacy-policy" className={({ isActive }) => (isActive ? 'active' : '')}>
          Privacy Policy
        </NavLink>
      </div>

        {/* Right Section: Social Links */}
        {/* <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div> */}
      </div>

      {/* Bottom Section: Footer Info */}
      <div className="footer-bottom">
      {/* <div>
        <p>&copy; 2024 Findever Technologies. All Rights Reserved.</p>
        </div> */}
      <div className='design'>
        <p>Designed & Developed by:- Findever Technologies</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
