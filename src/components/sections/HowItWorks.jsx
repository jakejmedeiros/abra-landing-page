import React from 'react';
import './HowItWorks.css';

function HowItWorks() {
  const steps = [
    "Install the Package", 
    "Annotate Your Functions", 
    "Attach Your API Key and the Chatbox Component", 
    "Generate Actions", 
    "Natural Language Execution Integrated With Your Site"
  ];
  
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2>How <span className="logo-text">abra</span> Works</h2>
          <p className="roboto-mono-light-italic">Five steps. Zero friction.</p>
        </div>

        <div className="workflow-container">
          {steps.map((step, index) => (
            <div key={index} className="workflow-step">
              <div className="step-number">{index + 1}</div>
              <div className="step-info">
                <h3>{step}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;