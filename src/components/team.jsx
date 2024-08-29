import React from 'react';

const Hero = () => {
  return (
    <section style={styles.hero}>
      <h1 style={styles.title}>Seamless Blockchain Payments</h1>
      <p style={styles.subtitle}>Fast, Secure, and Transparent transactions with Payme</p>
      <button style={styles.button}>Get Started</button>
    </section>
  );
};

const styles = {
  hero: {
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(to right, #1e3c, #2a52)',
    color: '06D001',
    textAlign: 'center',
    padding: '0 1rem',
  },
  title: {
    fontSize: '3rem',
    margin: '0.5rem 0',
  },
  subtitle: {
    fontSize: '1.5rem',
    margin: '0.5rem 0',
  },
  button: {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    color: '#1e3c72',
    backgroundColor: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '1rem',
  },
};

export default Hero;
