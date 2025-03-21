import React from 'react';
import './GettingStarted.css';

function GettingStarted() {
  return (
    <section className="getting-started" id="getting-started">
      <div className="container">
        <div className="section-header">
          <h2>Get Started Now</h2>
        </div>
        <div className="installation-steps">
          <div className="step-container">
            <div className="code-block">
              <code>npm install abra-actions</code>
            </div>
        </div>
        <div className="docs-link">
          <a href="https://github.com/jakejmedeiros/abra?tab=readme-ov-file#abra---ai-powered-function-discovery-and-execution" target="_blank" rel="noopener noreferrer" className="btn roboto-mono-medium">
            View Documentation →
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}

export default GettingStarted;
