import React from 'react';

const FindHospital: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Find Hospitals Near You</h2>
          <p className="text-lg text-gray-600 mb-8">
            Quickly locate hospitals and healthcare facilities in your area. Our comprehensive database helps you find the right medical care when you need it most, with detailed information about services and specialties.
          </p>
          <a
            href="/find-hospital"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Find Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default FindHospital; 