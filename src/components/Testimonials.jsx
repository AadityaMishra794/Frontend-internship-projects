import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" style={styles.testimonials}>
      <h2 style={styles.title}>What Our Customers Say</h2>
      <div style={styles.testimonialList}>
        <div style={styles.testimonialItem}>
          <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit consequuntur quam aliquid maxime?</p>
          <h4>- Jane Doe, CEO of ExampleCorp</h4>
        </div>
        <div style={styles.testimonialItem}>
          <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo nobis laborum illum nihil tempore?."</p>
          <h4>- John Smith, CTO of Tech Innovations</h4>
        </div>
      </div>
    </section>
  );
};

const styles = {
  testimonials: {
    padding: '4rem 1rem',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '2rem',
  },
  testimonialList: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  testimonialItem: {
    width: '300px',
    margin: '1rem',
    padding: '1rem',
    backgroundColor: 'white',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    borderRadius: '5px',
  },
};

export default Testimonials;
