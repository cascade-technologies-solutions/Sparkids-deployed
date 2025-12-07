import React, { useState, useEffect } from 'react';
import '../styles/countdown-timer.css';

const CountdownTimer = ({ targetDate, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    // Current time
    const now = new Date().getTime();
    // Target time (already passed in as a specific Date object)
    const target = targetDate.getTime();
    
    const difference = target - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        completed: true
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      completed: false
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = calculateTimeLeft();
      setTimeLeft(remaining);

      if (remaining.completed && onComplete) {
        onComplete();
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  // Pad numbers with leading zeros
  const pad = (num) => String(num).padStart(2, '0');

  return (
    <div className="countdown-timer-display">
      <div className="timer-block">
        <span className="timer-value">{pad(timeLeft.days)}</span>
        <span className="timer-label">Days</span>
      </div>
      <div className="timer-block">
        <span className="timer-value">{pad(timeLeft.hours)}</span>
        <span className="timer-label">Hours</span>
      </div>
      <div className="timer-block">
        <span className="timer-value">{pad(timeLeft.minutes)}</span>
        <span className="timer-label">Minutes</span>
      </div>
      <div className="timer-block">
        <span className="timer-value">{pad(timeLeft.seconds)}</span>
        <span className="timer-label">Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;

