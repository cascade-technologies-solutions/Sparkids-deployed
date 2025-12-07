import React from 'react';
import '../styles/countdown-timer.css';

const Hourglass3D = () => {
  return (
    <div className="hourglass-container">
      {/* Stand Structure */}
      <div className="stand-top"></div>
      <div className="stand-pillar pillar-left"></div>
      <div className="stand-pillar pillar-right"></div>
      <div className="stand-bottom"></div>

      {/* Glass Structure */}
      <div className="hourglass">
        <div className="glass-top">
          <div className="sand-top"></div>
        </div>
        
        <div className="glass-connector"></div>
        <div className="sand-stream"></div>
        
        <div className="glass-bottom">
          <div className="sand-bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default Hourglass3D;

