import React from 'react';
import CountdownTimer from '../components/CountdownTimer';
import Hourglass3D from '../components/Hourglass3D';
import '../styles/countdown-timer.css';

const CountdownPage = ({ targetDate, onComplete }) => {
  return (
    <div className="countdown-page">
      <div className="countdown-container">
        <h1 className="countdown-title">Website Launching In</h1>
        
        <Hourglass3D />
        
        <CountdownTimer 
          targetDate={targetDate} 
          onComplete={onComplete} 
        />
        
        <p style={{ marginTop: '2rem', fontSize: '1.2rem', opacity: 0.8 }}>
          Mark your calendar: December 7, 2025 at 04:00 PM
        </p>
      </div>
    </div>
  );
};

export default CountdownPage;

