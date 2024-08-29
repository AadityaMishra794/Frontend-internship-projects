// src/components/Header.js
import React from 'react';
import logo from '../Assets/Logo.png'; // Correct import path

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="Payme Logo" style={styles.logoImage} />
        <h1 style={styles.logoText}>Payme</h1>
      </div>
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}><a href="#features" style={styles.navLink}>Features</a></li>
          <li style={styles.navItem}><a href="#testimonials" style={styles.navLink}>Testimonials</a></li>
          <li style={styles.navItem}><a href="#contact" style={styles.navLink}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: 'white',
    color: 'green',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImage: {
    width: '40px', // Adjust size as needed
    height: '40px',
    marginRight: '0.5rem',
  },
  logoText: {
    fontSize: '1.5rem',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
  },
  navItem: {
    margin: 0,
  },
  navLink: {
    color: 'green',
    textDecoration: 'none',
    fontSize: '1rem',
  },
};

export default Header;
