import React from 'react';

const Articles: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Medical Articles</h2>
          <p className="text-lg text-gray-600 mb-8">
            Stay informed with our comprehensive collection of medical articles written by healthcare professionals. From general wellness to specialized treatments, find reliable information to support your health journey.
          </p>
          <a
            href="/articles"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            View Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Articles; 