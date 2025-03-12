import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <div className="logo">
              <span>abra</span>
            </div>
            <p>Enabling natural language function execution in TypeScript applications with just a comment.</p>
          </div>
          
          <div className="footer-column">
            <h4>Documentation</h4>
            <ul className="footer-links">
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#getting-started">Getting Started</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li><a href="https://github.com/jakejmedeiros/abra" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://github.com/jakejmedeiros/abra/issues" target="_blank" rel="noopener noreferrer">Issues</a></li>
              <li><a href="https://github.com/jakejmedeiros/abra/blob/main/README.md" target="_blank" rel="noopener noreferrer">Documentation</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} abra. all rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;