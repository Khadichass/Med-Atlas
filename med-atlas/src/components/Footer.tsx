import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Med Atlas</h3>
          <p>Your comprehensive medical reference platform</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#diagnostics">Diagnostics</a></li>
            <li><a href="#articles">Articles</a></li>
            <li><a href="#ai-chat">AI Chat</a></li>
            <li><a href="#find-hospital">Find Hospital</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@medatlas.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Med Atlas. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 