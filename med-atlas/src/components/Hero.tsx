import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your Comprehensive Healthcare Companion
          </h1>
          <p className="text-xl mb-8">
            MED aAtlaas brings together advanced diagnostics, medical articles, AI-powered assistance, and hospital locator services - all in one place.
          </p>
          <a
            href="#services"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 