import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  // Scroll to the top whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

 
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll  top when  button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  
  const buttonStyles = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '50px',
    height: '50px',
    backgroundColor: '#f37751',
    color: 'white',
    fontSize: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '40px',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'opacity 0.3s, transform 0.3s',
    zIndex: 1000, 
  };

  const hoverStyles = {
    backgroundColor: '#f58634',
  };

  const activeStyles = {
    transform: 'scale(0.95)',
  };

  return (
    <>
      {visible && (
        <div
          style={buttonStyles}
          onClick={scrollToTop}
          onMouseOver={(e) => (e.target.style.backgroundColor = hoverStyles.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyles.backgroundColor)}
          onMouseDown={(e) => (e.target.style.transform = activeStyles.transform)}
          onMouseUp={(e) => (e.target.style.transform = '')}
        >
          ⬆
        </div>
      )}
    </>
  );
};

export default ScrollToTop;