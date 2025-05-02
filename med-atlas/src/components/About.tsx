import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About MED aAtlaas</h2>
          <p className="text-lg text-gray-600 mb-8">
            MED aAtlaas is a revolutionary healthcare platform designed to empower patients and healthcare providers alike. Our mission is to make quality healthcare accessible, understandable, and efficient for everyone.
          </p>
          <p className="text-lg text-gray-600">
            We combine cutting-edge technology with medical expertise to provide comprehensive healthcare solutions, from advanced diagnostics to AI-powered assistance and hospital location services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About; 