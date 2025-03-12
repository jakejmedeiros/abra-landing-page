import React from 'react';
import './HowItWorks.css';

function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2>How <span className="logo-text">abra</span> Works</h2>
          <p className="section-subtitle roboto-mono-light">From TypeScript annotations to natural language execution in four simple steps.</p>
        </div>
        
        <div className="workflow-container">
          <div className="workflow-step">
            <div className="step-number">1</div>
            <div className="step-info">
              <h3>Annotate Functions</h3>
              <p>Add @abra-action comments to any TypeScript function you want available for natural language execution.</p>
            </div>
          </div>
          
          <div className="workflow-step">
            <div className="step-number">2</div>
            <div className="step-info">
              <h3>Generate actions.json</h3>
              <p>abra automatically analyzes your TypeScript types and generates a structured definition of all available functions.</p>
            </div>
          </div>
          
          <div className="workflow-step">
            <div className="step-number">3</div>
            <div className="step-info">
              <h3>Process User Intent</h3>
              <p>When users express what they want to do in natural language, abra intelligently maps their intent to the appropriate function.</p>
            </div>
          </div>
          
          <div className="workflow-step">
            <div className="step-number">4</div>
            <div className="step-info">
              <h3>Execute & Respond</h3>
              <p>The selected function is executed with the extracted parameters, and the result is returned to the user with helpful context.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;