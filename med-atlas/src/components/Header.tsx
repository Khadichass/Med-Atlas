import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo">Med Atlas</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#diagnostics">Diagnostics</a></li>
          <li><a href="#articles">Articles</a></li>
          <li><a href="#ai-chat">AI Chat</a></li>
          <li><a href="#find-hospital">Find Hospital</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;