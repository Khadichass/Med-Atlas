import React from 'react';
import heroBg from '../Assets/Images/hero-bg.jpg';

const Hero: React.FC = () => {
  return (
    <section
      className="hero"
      style={{
        background: `url(${heroBg}) center center/cover no-repeat`,
        position: 'relative',
      }}
    >
      <div className="hero-content">
        <h1>Your Comprehensive Med Atlas</h1>
        <p>Access medical information, diagnostics, and healthcare resources all in one place</p>
        <a href="#about" className="cta-button">Get Started</a>
      </div>
    </section>
  );
};

export default Hero; 