import React from 'react';

const AIChat: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">AI Healthcare Assistant</h2>
          <p className="text-lg text-gray-600 mb-8">
            Get instant answers to your health-related questions with our AI-powered chatbot. Our intelligent assistant provides reliable information and guidance, available 24/7 to support your healthcare needs.
          </p>
          <a
            href="/ai-chat"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Go to Chat
          </a>
        </div>
      </div>
    </section>
  );
};

export default AIChat; 