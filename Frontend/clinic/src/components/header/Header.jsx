import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleAppointmentClick = () => {
    navigate("/"); // Navigate to the home page
    setTimeout(() => {
      const appointmentSection = document.getElementById("appointment-section");
      if (appointmentSection) {
        appointmentSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Slight delay to ensure the navigation completes
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
 {/* Make the logo clickable and route to homepage */}
 <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
          <img
            src="logo 1.png"
            alt="Nayab Anjum Clinic Logo"
            className={styles.logo}
          />
        </NavLink>      </div>

      {/* Navbar */}
      <nav className={`${styles.navbar} ${isMenuOpen ? styles.active : ""}`}>
        <ul className={styles.navLinks}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? `${styles.activeLink}` : "")}
              end
              onClick={() => setIsMenuOpen(false)} // Close the menu on link click
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? `${styles.activeLink}` : "")}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) => (isActive ? `${styles.activeLink}` : "")}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? `${styles.activeLink}` : "")}
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              className={({ isActive }) => (isActive ? `${styles.activeLink}` : "")}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className={styles.callNow}>
        <button
          onClick={handleAppointmentClick}
          className={styles.appointmentButton}
        >
          Appointment
        </button>

        <a
          href="tel:9006870168"
          className={styles.callButton}
          aria-label="Call us at 9006870168"
        >
          9006870168
        </a>
      </div>

      {/* Hamburger Menu Icon */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        {isMenuOpen ? (
          <FaTimes className={styles.menuIcon} />
        ) : (
          <FaBars className={styles.menuIcon} />
        )}
      </div>
    </header>
  );
};

export default Header;
