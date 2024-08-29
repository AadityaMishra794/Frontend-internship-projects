// src/App.js
import React from 'react';
import Features from './components/Features';
import Header from './components/Header';
import Hero from './components/team';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './styles/App.css'
const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Features/>
      <Testimonials/>
      <Footer/>
    </div>
   
  );
};

export default App;
