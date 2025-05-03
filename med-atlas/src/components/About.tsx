import React from 'react';
import aboutImg from '../Assets/Images/about1.jpg';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <h2 className="about-title">About Med Atlas</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Med Atlas is a comprehensive platform designed to provide accessible medical information,
            diagnostic tools, and healthcare resources to both medical professionals and the general public.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImg} alt="About Med Atlas" />
        </div>
      </div>
    </section>
  );
};

export default About; 