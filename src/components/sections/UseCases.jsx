import React, { useState, useEffect, useRef } from 'react';
import './UseCases.css';

function UseCases() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef(null);

  const useCases = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6H17C17 3.79 15.21 2 13 2C10.79 2 9 3.79 9 6H4V20H20V6ZM13 4C14.1 4 15 4.9 15 6H11C11 4.9 11.9 4 13 4ZM18 18H6V8H18V18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "E-Commerce",
      description: "Enable customers to search for products, add to cart, and complete purchases using natural language requests - all with just a comment in your code."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 13C10 13 11 13 12 15C12 15 14.5 9.5 17 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Task Automation",
      description: "Streamline workflows by allowing users to create, assign, and manage tasks through conversational inputs that map directly to your functions."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8C12 8 12 12 12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 14L12 18L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 16.7C21.1256 16.2982 22 15.2079 22 14C22 12.4023 20.7609 11 19 11C19 8 17.5 6 15 6C12.6 6 11.1 8.1 11 10.5C9.5 10 8 11 8 13C8 14.7255 9.5 16 11 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Content Management",
      description: "Let users create, edit, and publish content through simple language commands, eliminating complex form interfaces and streamlining workflows."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 10H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Financial Applications",
      description: "Create intuitive banking interfaces where users can check balances, transfer funds, or search transactions using natural language queries."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.5 19H17V7C17 5.89543 16.1046 5 15 5H5C3.89543 5 3 5.89543 3 7V19H2.5C2.22386 19 2 19.2239 2 19.5C2 19.7761 2.22386 20 2.5 20H17.5C17.7761 20 18 19.7761 18 19.5C18 19.2239 17.7761 19 17.5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 9H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 13H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 17H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Internal Tools",
      description: "Build powerful admin interfaces where team members can perform complex operations through simple text commands mapped to your backend functions."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3L2 12H5V20H19V12H22L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Travel Planning",
      description: "Enable customers to search, book, and modify travel arrangements using conversational language rather than navigating through complex form interfaces."
    }
  ];

  // Show 3 cards on desktop, 1 on mobile
  const getVisibleCards = () => {
    if (window.innerWidth < 768) {
      return 1;
    }
    return 3;
  };
  
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(useCases.length / visibleCards);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  // Touch events for mobile swiping
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section className="modern-section" id="use-cases">
      <div className="container">
        <div className="section-header">
          <h2>Powerful Use Cases</h2>
          <p className="section-subtitle roboto-mono-light">abra enables natural language function execution across a wide range of applications.</p>
        </div>
        
        <div className="carousel-container">
          <button className="carousel-arrow carousel-prev" onClick={prevSlide}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div 
            className="carousel-track" 
            ref={carouselRef}
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div className="carousel-slide" key={slideIndex}>
                <div className="slide-content">
                  {useCases
                    .slice(slideIndex * visibleCards, slideIndex * visibleCards + visibleCards)
                    .map((useCase, index) => (
                      <div className="modern-card carousel-card" key={slideIndex * visibleCards + index}>
                        <div className="card-icon">
                          {useCase.icon}
                        </div>
                        <h3 className="roboto-mono-semibold">{useCase.title}</h3>
                        <p className="roboto-mono-light">{useCase.description}</p>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
          
          <button className="carousel-arrow carousel-next" onClick={nextSlide}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className="carousel-indicators">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button 
              key={index} 
              className={`carousel-indicator ${activeIndex === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default UseCases;