import React from 'react';

const Features = () => {
  return (
    <section id="features" style={styles.features}>
      <h2 style={styles.title}>Why Choose Payme?</h2>
      <div style={styles.featureList}>
        <div style={styles.featureItem}>
          <h3>Security</h3>
          <p>Top-notch security protocols to keep your transactions safe.</p>
        </div>
        <div style={styles.featureItem}>
          <h3>Speed</h3>
          <p>Lightning-fast transaction speeds using blockchain technology.</p>
        </div>
        <div style={styles.featureItem}>
          <h3>Transparency</h3>
          <p>Transparent processes to ensure trust and accountability.</p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  features: {
    padding: '4rem 1rem',
    backgroundColor: '#f4f4f4',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '2rem',
  },
  featureList: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  featureItem: {
    width: '300px',
    margin: '1rem',
    padding: '1rem',
    backgroundColor: 'white',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    borderRadius: '5px',
  },
};

export default Features;
