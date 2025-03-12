import React, { useState } from 'react';
import './FAQ.css';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqs = [
    {
      question: "How does abra extract TypeScript types?",
      answer: "abra uses TypeScript's compiler API to analyze your code and extract type information from your annotated functions. It recursively traverses type definitions to build a complete representation of your function parameters."
    },
    {
      question: "Do I need to use TypeScript to use abra?",
      answer: "Yes, abra is designed specifically for TypeScript projects. The type extraction that makes abra powerful relies on TypeScript's type system."
    },
    {
      question: "Can abra call multiple functions in sequence?",
      answer: "Yes, abra can determine when a user's request requires calling multiple functions and will execute them in the appropriate sequence to fulfill the request."
    },
    {
      question: "How do I control which functions are exposed to users?",
      answer: "You have complete control by only adding the @abra-action annotation to functions you want to make available. You can also use the abra configuration to set additional access controls."
    },
    {
      question: "Does abra work with any LLM provider?",
      answer: "By default, abra works with OpenAI's GPT models, but it's designed to be model-agnostic. You can configure it to work with other LLM providers by implementing the appropriate adapter."
    },
    {
      question: "How does abra handle user authentication and security?",
      answer: "abra executes functions in your application's context, so all your existing authentication and security measures apply. It doesn't bypass any of your application's security controls."
    }
  ];

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p className="roboto-mono-light">Get answers to common questions about integrating and using abra.</p>
        </div>
        
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div className={`faq-item ${activeIndex === index ? 'active' : ''}`} key={index}>
              <div 
                className="faq-question" 
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="roboto-mono-semibold">{faq.question}</h3>
                <div className="faq-icon">
                  {activeIndex === index ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
              </div>
              <div className="faq-answer">
                <p className="roboto-mono-light">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;