import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" style={styles.footer}>
      <p>&copy; 2024 BlockchainPay. All rights reserved.</p>
      <div style={styles.socials}>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '2rem',
    backgroundColor: '#282c34',
    color: 'white',
    textAlign: 'center',
  },
  socials: {
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  },
};

export default Footer;
