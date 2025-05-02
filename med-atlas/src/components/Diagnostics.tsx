import React from 'react';

const Diagnostics: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Advanced Diagnostics</h2>
          <p className="text-lg text-gray-600 mb-8">
            Access state-of-the-art diagnostic tools and services to better understand your health. Our platform provides comprehensive analysis and insights to help you make informed healthcare decisions.
          </p>
          <a
            href="/diagnostics"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Diagnostics; 