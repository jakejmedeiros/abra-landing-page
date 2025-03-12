import React from 'react';
import './GettingStarted.css';

function GettingStarted() {
  return (
    <section className="getting-started" id="getting-started">
      <div className="container">
        <div className="section-header">
          <h2>Getting Started</h2>
          <p className="section-subtitle roboto-mono-light-italic">Start integrating natural language function execution in four simple steps.</p>
        </div>
        
        <div className="installation-steps">
          <div className="step-container">
            <div className="step-header">
              <div className="step-number">1</div>
              <h3 className="roboto-mono-semibold">Install the SDK</h3>
            </div>
            <div className="code-block">
              <code>npm install abra-actions</code>
            </div>
          </div>
          
          <div className="step-container">
            <div className="step-header">
              <div className="step-number">2</div>
              <h3 className="roboto-mono-semibold">Annotate Your Functions</h3>
            </div>
            <div className="code-block">
            <code>{'// @abra-action Your function description'}<br />export function yourFunction() &#123;&#125;</code>
            </div>
          </div>
          
          <div className="step-container">
            <div className="step-header">
              <div className="step-number">3</div>
              <h3 className="roboto-mono-semibold">Generate Your Actions File</h3>
            </div>
            <div className="code-block">
              <code>npx abra-actions</code>
            </div>
            <p className="step-description roboto-mono-light">This scans your project and creates an actions.json file with all your annotated functions.</p>
          </div>
          
          <div className="step-container">
            <div className="step-header">
              <div className="step-number">4</div>
              <h3 className="roboto-mono-semibold">Integrate the UI Component</h3>
            </div>
            <div className="code-block">
              <code>import &#123; AbraInput &#125; from 'abra-actions';<br /><br />function YourComponent() &#123;<br />  return &lt;AbraInput /&gt;;<br />&#125;</code>
            </div>
          </div>
        </div>
        
        <div className="docs-link">
          <a href="https://github.com/yourusername/abra" target="_blank" rel="noopener noreferrer" className="btn roboto-mono-medium">View Documentation</a>
        </div>
      </div>
    </section>
  );
}

export default GettingStarted;