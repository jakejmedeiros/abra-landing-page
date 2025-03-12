import React, { useState } from 'react';
import './Waitlist.css';

function Waitlist() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email);
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <section className="waitlist" id="waitlist">
      <div className="container">
        <div className="section-title">
          <h2>Join Our Waitlist</h2>
          <p className="roboto-mono-light-italic">Be among the first to experience abra and revolutionize how your users interact with your application.</p>
        </div>
        <div className="waitlist-form">
          {isSubmitted ? (
            <div className="success-message">
              <h3 className="roboto-mono-medium">Thank you for joining our waitlist!</h3>
              <p className="roboto-mono-light">We'll notify you when early access is available.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="roboto-mono-light"
                />
                <button type="submit" className="btn roboto-mono-medium">Join Waitlist</button>
              </div>
            </form>
          )}
          <p className="privacy-note roboto-mono-light">We'll notify you when early access is available. No spam, promise!</p>
        </div>
      </div>
    </section>
  );
}

export default Waitlist;