import React, { useState, useEffect } from 'react';
import CountdownTimer from '../components/CountdownTimer';
import ThreeHourglass from '../components/ThreeHourglass';
import '../styles/countdown-timer.css';

const CountdownPage = ({ targetDate, onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const remaining = target - now;
      
      // Calculate progress based on time remaining
      // Progress increases as we get closer to target time
      // We'll use a reference point: if countdown started long ago, assume it started 1 year before target
      // This gives us a normalized progress from 0 to 1
      const oneYearInMs = 365 * 24 * 60 * 60 * 1000;
      const assumedStartTime = target - oneYearInMs;
      const elapsed = now - assumedStartTime;
      const totalDuration = target - assumedStartTime;
      
      // Progress: 0 = all sand in top, 1 = all sand in bottom
      const calculatedProgress = Math.max(0, Math.min(1, elapsed / totalDuration));
      
      setProgress(calculatedProgress);
    };

    calculateProgress();
    const interval = setInterval(calculateProgress, 100);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="countdown-page">
      <div className="countdown-container">
        <h1 className="countdown-title">Website Launching In</h1>
        
        <ThreeHourglass progress={progress} />
        
        <CountdownTimer 
          targetDate={targetDate} 
          onComplete={onComplete} 
        />
        
        <p style={{ marginTop: '2rem', fontSize: '1.2rem', opacity: 0.8 }}>
          Mark your calendar: December 7, 2025 at 01:25 PM
        </p>
      </div>
    </div>
  );
};

export default CountdownPage;

