import React, { useState, useEffect, useRef } from 'react';
import './AbraAssistant.css';

const AbraAssistant = () => {
  const [expanded, setExpanded] = useState(false);
  const [input, setInput] = useState('');
  const [currentExample, setCurrentExample] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);
  const [showThinking, setShowThinking] = useState(false);
  const [thinkingStep, setThinkingStep] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isAutoDemo, setIsAutoDemo] = useState(true);
  const textInputRef = useRef(null);
  const contentRef = useRef(null);

  const examples = [
    {
      query: "Find wireless headphones with noise cancellation under $200",
      thinking: [
        "Identifying product category: wireless headphones ✓",
        "Filtering for noise cancellation feature ✓",
        "Setting price range: under $200 ✓",
        "Searching product catalog...",
        "Sorting results by best match..."
      ],
      success: "Found 4 matching headphones. Added 'TechWave Pro Noise Cancelling Headphones' to your cart. Price: $179.99"
    },
    {
      query: "Enable two-factor authentication on my account",
      thinking: [
        "Accessing security settings ✓",
        "Checking account eligibility for 2FA ✓",
        "Retrieving verified contact methods ✓",
        "Preparing verification system...",
        "Setting up authentication protocol..."
      ],
      success: "Two-factor authentication enabled successfully. Verification code sent to your phone ending in 6734."
    },
    {
      query: "Report an issue with the checkout page not loading",
      thinking: [
        "Identifying issue type: technical problem ✓",
        "Gathering system information ✓",
        "Checking for known issues ✓",
        "Creating support ticket...",
        "Assigning to appropriate team..."
      ],
      success: "Support ticket #45823 created. A support representative will contact you within 24 hours."
    }
  ];

  // Handle dynamic height adjustments
  useEffect(() => {
    const adjustHeight = () => {
      if (contentRef.current && expanded) {
        const contentHeight = contentRef.current.scrollHeight;
        const maxHeight = window.innerHeight * 0.8;
        const minHeight = 300; // Minimum height to prevent too small container
        
        // Ensure the container height is between min and max values
        contentRef.current.style.maxHeight = Math.max(minHeight, Math.min(contentHeight + 40, maxHeight)) + 'px';
        
        // Ensure latest content is visible
        setTimeout(() => {
          if (contentRef.current) {
            contentRef.current.scrollTop = contentRef.current.scrollHeight;
          }
        }, 50);
      }
    };

    adjustHeight();
    
    // Adjust height whenever content changes
    const observer = new MutationObserver(adjustHeight);
    
    if (contentRef.current) {
      observer.observe(contentRef.current, { 
        childList: true, 
        subtree: true,
        characterData: true
      });
    }

    // Also adjust on window resize
    window.addEventListener('resize', adjustHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', adjustHeight);
    };
  }, [expanded, showThinking, thinkingStep, showSuccess]);

  useEffect(() => {
    const heroElement = document.querySelector('.hero');
    const buttonElement = document.querySelector('.abra-button-container');
    
    if (heroElement && buttonElement) {
      buttonElement.style.marginTop = '0';
    }
  }, []);

  useEffect(() => {
    if (expanded && textInputRef.current) {
      textInputRef.current.focus();
    }
  }, [expanded]);

  // Reset demo state when component is collapsed
  useEffect(() => {
    if (!expanded) {
      // Only reset values, don't run animations when closed
      setCurrentExample(0);
      setTypingIndex(0);
      setThinkingStep(0);
      setShowThinking(false);
      setShowSuccess(false);
      setInput('');
    } else {
      // When expanded, always restart the auto demo
      setIsAutoDemo(true);
    }
  }, [expanded]);

  useEffect(() => {
    if (currentExample === examples.length - 1 && showSuccess) {
      setTimeout(() => {
        setExpanded(false);
        setIsAutoDemo(false); 
      }, 3000);
    }
  }, [currentExample, showSuccess]);
  
  useEffect(() => {
    let typingInterval;
    let initialDelay;
  
    if (expanded && isAutoDemo) {
      setTypingIndex(0);
      setThinkingStep(0);
      setShowThinking(false);
      setShowSuccess(false);
      setInput('');
  
      initialDelay = setTimeout(() => {
        const example = examples[currentExample].query;
        typingInterval = setInterval(() => {
          setTypingIndex(prev => {
            if (prev < example.length) {
              setInput(example.slice(0, prev + 1));
              return prev + 1;
            } else {
              clearInterval(typingInterval);
              setTimeout(() => setShowThinking(true), 300); // Reduced from 500ms
              return prev;
            }
          });
        }, 40); // Reduced from 75ms for faster typing
      }, 500); // Reduced from 800ms
    }
  
    return () => {
      clearTimeout(initialDelay);
      clearInterval(typingInterval);
    };
  }, [expanded, currentExample, isAutoDemo]);
  
  useEffect(() => {
    let stepInterval;
  
    if (showThinking && isAutoDemo) {
      setThinkingStep(0);
      stepInterval = setInterval(() => {
        setThinkingStep(prev => {
          if (prev < examples[currentExample].thinking.length) {
            return prev + 1;
          } else {
            clearInterval(stepInterval);
            setTimeout(() => {
              setShowSuccess(true);
              setTimeout(() => {
                if (currentExample < examples.length - 1) {
                  resetForNextExample();
                } else {
                  setIsAutoDemo(false);
                  setInput('');
                  setShowThinking(false);
                  setShowSuccess(false);
                }
              }, 2000); // Reduced from 3000ms
            }, 700); // Reduced from 1000ms
            return prev;
          }
        });
      }, 800); // Reduced from 1200ms
    }
  
    return () => clearInterval(stepInterval);
  }, [showThinking, currentExample, isAutoDemo]);
  
  const resetForNextExample = () => {
    setCurrentExample(prev => prev + 1);
    setTypingIndex(0);
    setThinkingStep(0);
    setShowThinking(false);
    setShowSuccess(false);
    setInput('');

    setTimeout(() => {
      setIsAutoDemo(true);
    }, 500); // Reduced from 800ms
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    if (isAutoDemo) {
      setIsAutoDemo(false);
      setShowThinking(false);
      setShowSuccess(false);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || isAutoDemo) return;
    
    // Process manual input
    setShowThinking(true);
    setThinkingStep(0);
    
    // Simulate processing and display success
    setTimeout(() => {
      setShowSuccess(true);
      setTimeout(() => {
        setShowThinking(false);
        setShowSuccess(false);
        setInput('');
        if (textInputRef.current) {
          textInputRef.current.focus();
        }
      }, 3000);
    }, 3000);
  };

  // If collapsed, only show the button
  if (!expanded) {
    return (
      <div className="abra-button-container">
        <button 
          className="abra-circle-button" 
          onClick={toggleExpanded}
          aria-label="Open Abra Assistant"
        >
          <span className="abra-at-symbol">@</span>
        </button>
      </div>
    );
  }

  return (
    <div className="abra-container">
      <div className="abra-header">
        <h3 className="abra-title">Abra Assistant (Demo)</h3>
        <button 
          className="abra-close-button" 
          onClick={toggleExpanded}
          aria-label="Close Abra Assistant"
        >
          ×
        </button>
      </div>
      <div ref={contentRef} className="abra-content">
        <div className="abra-message-container">
          <div className="abra-message">
            I can execute functions in this application through natural language. What would you like to do?
          </div>

        {showThinking && (
          <div className="abra-thinking-container">
            {examples[currentExample].thinking.map((step, index) => (
              <div key={index} className="abra-thinking-step">
                {thinkingStep > index ? (
                  <span className="abra-step-checkmark">✓</span>
                ) : thinkingStep === index ? (
                  <span className="abra-loader"></span>
                ) : (
                  <span style={{width: '20px'}}></span>
                )}
                {step.replace('✓', '').trim()}
              </div>
            ))}
          </div>
        )}

        {showSuccess && (
          <div className="abra-success-message">
            ✅ {examples[currentExample].success}
          </div>
        )}
        </div>
        
        <form onSubmit={handleSubmit} className="abra-input-container">
          <input
            ref={textInputRef}
            type="text"
            placeholder="Type what you want to do..."
            value={input}
            onChange={handleInputChange}
            className="abra-input"
            readOnly={isAutoDemo}
          />
          <button 
            type="submit" 
            className="abra-send-button"
            aria-label="Send message"
            disabled={isAutoDemo}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: '-1px', marginTop: '0px'}}>
              <path d="M22 2L11 13" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AbraAssistant;