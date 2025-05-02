import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">MED aAtlaas</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-blue-600">About Us</a>
            <a href="/diagnostics" className="text-gray-600 hover:text-blue-600">Diagnostics</a>
            <a href="/articles" className="text-gray-600 hover:text-blue-600">Articles</a>
            <a href="/ai-chat" className="text-gray-600 hover:text-blue-600">AI Chat</a>
            <a href="/find-hospital" className="text-gray-600 hover:text-blue-600">Find Hospital</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact Us</a>
          </div>
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-blue-600">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;