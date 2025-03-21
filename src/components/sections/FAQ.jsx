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
      question: "How does Abra understand what functions to make available to users?",
      answer: "Abra uses TypeScript's compiler API to analyze your codebase and automatically extracts type information from functions annotated with @abra-action comments. This type extraction creates a structured representation of your application's capabilities without requiring you to manually define them."
    },
    {
      question: "How secure is letting users interact with my application through natural language?",
      answer: "Abra operates entirely within your application's existing security context and never bypasses your authentication or authorization systems. It can only execute functions you explicitly annotate with @abra-action, and those functions run with the same user permissions and security checks as if they were triggered through your UI. No new security vulnerabilities are introduced."
    },
    {
      question: "Do I need to use TypeScript for my application to work with Abra?",
      answer: "Yes, Abra is designed specifically for TypeScript projects. The type extraction that powers Abra's understanding relies on TypeScript's rich type system. This allows Abra to automatically understand parameter types, validate user inputs, and transform data appropriately without additional configuration."
    },
    {
      question: "How does Abra handle complex parameter types and nested objects?",
      answer: "Abra recursively traverses your TypeScript type definitions to build a complete representation of even the most complex parameter structures. It can handle nested objects, arrays, unions, and custom types. The system automatically validates and transforms user inputs to match the expected types, even filling in reasonable defaults when information is missing."
    },
    {
      question: "What happens when a user asks for something that doesn't map to an available function?",
      answer: "Abra's LLM integration analyzes the user's intent and maps it to the most appropriate function. If no suitable function exists, Abra attempts to direct the user towards a set of known actions."
    },
    {
      question: "How do I control which application functions users can access through Abra?",
      answer: "You have complete control by only adding the @abra-action annotation to functions you want to expose. Each annotated function can include a description that helps Abra understand when to use it. Your existing permission checks within these functions will continue to work, ensuring users can only perform actions they're authorized for."
    },
    {
      question: "What kind of performance impact does adding Abra have on my application?",
      answer: "Abra's type extraction process runs during your build phase and doesn't affect runtime performance. When processing user requests, the LLM analysis adds a brief delay (typically a few hundred milliseconds), but function execution performance is identical to your regular application code since Abra simply routes to your existing functions."
    },
  ];

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p className="roboto-mono-light">Everything you need to know about integrating Abra into your TypeScript applications.</p>
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