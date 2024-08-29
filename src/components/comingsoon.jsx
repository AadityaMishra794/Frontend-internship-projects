// src/components/ComingSoonPage.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import particlesJS from 'particles.js';
import logo from '../Assets/Logo.png'; // Ensure the path is correct

const ComingSoonPage = () => {
  useEffect(() => {
    AOS.init();
    particlesJS.load('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#f9a828' },
        shape: {
          type: 'circle',
          stroke: { width: 0, color: '#000000' },
          polygon: { nb_sides: 5 },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
          value: 5,
          random: true,
          anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#f9a828',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 6,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'repulse' },
          onclick: { enable: true, mode: 'push' },
          resize: true
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 1 } },
          bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 }
        }
      },
      retina_detect: true
    });
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', backgroundColor: '#333', color: '#f4f4f4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div id="particles-js" style={{ position: 'absolute', width: '100%', height: '100%' }}></div>
      <div className="container" style={{ zIndex: 1, textAlign: 'center', maxWidth: '800px', margin: 'auto', padding: '30px' }}>
        <h1 data-aos="zoom-in-up"><img src={logo} alt="PayMe Logo" className="logo" style={{ height: '50px', width: 'auto', marginRight: '5px', transition: 'transform 0.5s' }} />PayME</h1>
        <h3>Just Around the Corner!</h3>
        <p data-aos="fade-up" data-aos-delay="500">Get ready for an exciting revolution in crypto-based financial services—it's just around the corner!</p>
        <h2 data-aos="fade-up" data-aos-delay="800">Services we'll offer:</h2>
        <ul id="service-list" style={{ listStyleType: 'none', padding: 0 }}>
          <li data-aos="fade-up" data-aos-delay="1000"><i className="fas fa-wallet"></i> Cryptorupees Transfer</li>
          <li data-aos="fade-up" data-aos-delay="1200"><i className="fas fa-comments"></i> Cryptorupees Loans</li>
          <li data-aos="fade-up" data-aos-delay="1400"><i className="fas fa-university"></i> Decentralized Finance (DeFi) Solutions</li>
        </ul>
      </div>
    </div>
  );
};

export default ComingSoonPage;
