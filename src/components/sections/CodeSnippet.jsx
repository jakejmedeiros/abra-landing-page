import React from 'react';
import './CodeSnippet.css';

function CodeSnippet() {
  return (
    <div className="container">
      <div className="code-section">
        {/* TypeScript Function With Annotation */}
        <div className="code-snippet animated delay-3">
          <div className="code-header">
            <div className="terminal-dots">
              <div className="dot dot-red"></div>
              <div className="dot dot-yellow"></div>
              <div className="dot dot-green"></div>
            </div>
            <div className="language-tag">typescript</div>
          </div>
          <pre>
{`// Step 1: Add the comment annotation to your function
// @abra-action Add product to shopping cart

export function addToCart(
  productId: string,
  quantity: number,
  options?: ProductOptions
): Promise<CartItem> {
  // Your existing implementation
  return api.cart.add(productId, quantity, options);
}`}
          </pre>
        </div>
        
        {/* User Interface with Input */}
        <div className="code-snippet animated delay-3">
          <div className="code-header">
            <div className="terminal-dots">
              <div className="dot dot-red"></div>
              <div className="dot dot-yellow"></div>
              <div className="dot dot-green"></div>
            </div>
            <div className="language-tag">user interface</div>
          </div>
          <div className="user-interface-mock">
            <div className="chat-button">
              <span className="at-symbol">@</span>
            </div>
            <div className="input-expanded">
              <div className="input-text">add two blue shirts, size medium to my cart</div>
              <div className="send-button">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Auto-generated Actions JSON */}
        <div className="code-snippet animated delay-3">
          <div className="code-header">
            <div className="terminal-dots">
              <div className="dot dot-red"></div>
              <div className="dot dot-yellow"></div>
              <div className="dot dot-green"></div>
            </div>
            <div className="language-tag">auto-generated execution</div>
          </div>
          <pre>
{`// abra automatically:
// 1. Determines user intent
// 2. Selects the appropriate function
// 3. Extracts parameters from natural language

{
  "action": "addToCart",
  "params": {
    "productId": "tshirt-blue-cotton",
    "quantity": 2,
    "options": {
      "size": "medium",
      "color": "blue"
    }
  }
}`}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default CodeSnippet;