import React, { useState } from 'react';
import './GettingStarted.css';

function GettingStarted() {
  const [step, setStep] = useState(1);
  
  const goToNextStep = () => {
    setStep(step < 3 ? step + 1 : 1);
  };
  
  return (
    <section className="getting-started" id="getting-started">
      <div className="container">
        <div className="section-header">
          <h2>Get Started Now</h2>
        </div>
        <div className="installation-steps">
          <div className="step-container">
            <div className="code-block">
              {step === 1 && <InstallStep onNext={goToNextStep} />}
              {step === 2 && <CodeEditorStep onNext={goToNextStep} />}
              {step === 3 && <TerminalOutputStep onNext={goToNextStep} />}
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

const InstallStep = ({ onNext }) => {
  return (
    <div style={{ fontFamily: 'Roboto Mono, monospace', color: '#E0E0E0', textAlign: 'left', position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF5F56', marginRight: '6px' }}></div>
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FFBD2E', marginRight: '6px' }}></div>
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27C93F', marginRight: '12px' }}></div>
        <span style={{ color: '#888', fontSize: '14px' }}>terminal — project-dir</span>
      </div>
      <div style={{ lineHeight: '1.6' }}>
        <span style={{ color: '#27C93F' }}>user@dev</span>:<span style={{ color: '#3B78FF' }}>~/project-dir</span>$ npm install abra-actions
        <div style={{ color: '#888' }}>added 42 packages, and audited 43 packages in 3s</div>
      </div>
      
      <div 
        onClick={onNext}
        style={{
          position: 'absolute',
          right: '10px',
          top: '50%',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          transform: 'translateY(-50%)'
        }}
        className="step-button"
      >
        <span style={{ marginRight: '8px', color: '#23C15C' }}>View Code Examples</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#23C15C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

const CodeEditorStep = ({ onNext }) => {
  return (
    <div style={{ 
      fontFamily: 'Roboto Mono, monospace', 
      color: '#E0E0E0', 
      textAlign: 'left', 
      position: 'relative',
      background: '#1e1e1e',
      padding: '16px',
      borderRadius: '6px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF5F56', marginRight: '6px' }}></div>
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FFBD2E', marginRight: '6px' }}></div>
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27C93F', marginRight: '12px' }}></div>
        <span style={{ color: '#888', fontSize: '14px' }}>userActions.ts — project-dir</span>
      </div>
      
      <pre style={{ 
        margin: 0, 
        padding: 0,
        fontFamily: 'Roboto Mono, monospace',
        fontSize: '14px',
        lineHeight: '1.6',
        overflow: 'auto'
      }}>
        <code>
  <div><span style={{ color: '#569cd6' }}>import</span> <span style={{ color: '#9cdcfe' }}>{'{ UserSettings, NotificationPreference }'}</span> <span style={{ color: '#569cd6' }}>from</span> <span style={{ color: '#ce9178' }}>'./types'</span>;</div>
  <div>&nbsp;</div>
  <div><span style={{ color: '#6A9955' }}>{'/**'}</span></div>
  <div><span style={{ color: '#6A9955' }}> * @abra-action update a user's profile settings</span></div>
  <div><span style={{ color: '#6A9955' }}> */</span></div>
  <div><span style={{ color: '#569cd6' }}>export function</span> <span style={{ color: '#dcdcaa' }}>changeUserSetting</span>(</div>
  <div>&nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>userId</span>: <span style={{ color: '#4ec9b0' }}>string</span>,</div>
  <div>&nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>setting</span>: <span style={{ color: '#4ec9b0' }}>UserSettings</span></div>
  <div>) {'{'}</div>
  <div>&nbsp;&nbsp;<span style={{ color: '#888' }}>• • •</span></div>
  <div>{'}'}</div>
  <div>&nbsp;</div>
  <div><span style={{ color: '#6A9955' }}>{'/**'}</span></div>
  <div><span style={{ color: '#6A9955' }}> * @abra-action toggle notification preferences for a user</span></div>
  <div><span style={{ color: '#6A9955' }}> */</span></div>
  <div><span style={{ color: '#569cd6' }}>export function</span> <span style={{ color: '#dcdcaa' }}>toggleNotification</span>(</div>
  <div>&nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>userId</span>: <span style={{ color: '#4ec9b0' }}>string</span>,</div>
  <div>&nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>preference</span>: <span style={{ color: '#4ec9b0' }}>NotificationPreference</span></div>
  <div>) {'{'}</div>
  <div>&nbsp;&nbsp;<span style={{ color: '#888' }}>• • •</span></div>
  <div>{'}'}</div>
  <div>&nbsp;</div>
  <div><span style={{ color: '#6A9955' }}>{'/**'}</span></div>
  <div><span style={{ color: '#6A9955' }}> * @abra-action generate activity report for specified time period</span></div>
  <div><span style={{ color: '#6A9955' }}> */</span></div>
  <div><span style={{ color: '#569cd6' }}>export function</span> <span style={{ color: '#dcdcaa' }}>generateReport</span>(</div>
  <div>&nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>startDate</span>: <span style={{ color: '#4ec9b0' }}>string</span>,</div>
  <div>&nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>endDate</span>: <span style={{ color: '#4ec9b0' }}>string</span>,</div>
  <div>&nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>format</span>: <span style={{ color: '#4ec9b0' }}>string</span></div>
  <div>) {'{'}</div>
  <div>&nbsp;&nbsp;<span style={{ color: '#888' }}>• • •</span></div>
  <div>{'}'}</div>
</code>
      </pre>
      
      <div 
        onClick={onNext}
        style={{
          position: 'absolute',
          right: '16px',
          bottom: '16px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <span style={{ marginRight: '8px', color: '#23C15C' }}>Run npx actions</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#23C15C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

const TerminalOutputStep = ({ onNext }) => {
  return (
    <div style={{ fontFamily: 'Roboto Mono, monospace', color: '#E0E0E0', textAlign: 'left', position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF5F56', marginRight: '6px' }}></div>
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FFBD2E', marginRight: '6px' }}></div>
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27C93F', marginRight: '12px' }}></div>
        <span style={{ color: '#888', fontSize: '14px' }}>terminal — project-dir</span>
      </div>
      <div style={{ lineHeight: '1.6' }}>
        <span style={{ color: '#27C93F' }}>user@dev</span>:<span style={{ color: '#3B78FF' }}>~/project-dir</span>$ npx actions
        <div style={{ color: '#888' }}>
          <div>✅ Project root is: /Users/user/project-dir</div>
          <div>🔍 Scanning project for @abra-action functions...</div>
          <div>Found 3 TypeScript files</div>
          <div>Using tsconfig at: /Users/user/project-dir/tsconfig.json</div>
          <div>📝 Collecting type definitions...</div>
          <div>📝 Found type alias: UserSettings</div>
          <div>📝 Found interface: NotificationPreference</div>
          <div>📝 Found 2 type definitions</div>
          <div>🔍 Processing type structures...</div>
          <div>🔍 Finding annotated functions...</div>
          <div>✅ Found action: changeUserSetting</div>
          <div>✅ Found action: toggleNotification</div>
          <div>✅ Found action: generateReport</div>
          <div>✅ actions.json generated successfully!</div>
        </div>
      </div>
      
      <div 
        onClick={onNext}
        style={{
          position: 'absolute',
          right: '10px',
          bottom: '10px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center'
        }}
        className="step-button"
      >
        <span style={{ marginRight: '8px', color: '#23C15C' }}>Start Over</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#23C15C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

export default GettingStarted;