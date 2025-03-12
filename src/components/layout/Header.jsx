import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <span>abra</span>
          </div>
          <div className="nav-links">
            <a href="#how-it-works">How It Works</a>
            <a href="#use-cases">Use Cases</a>
            <a href="#getting-started" className="waitlist-link">Get Started</a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;