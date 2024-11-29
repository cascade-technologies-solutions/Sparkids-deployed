import React from 'react';
import '../styles/mission.css'; // Updated CSS path
import centralImage from '../Assets/about-img/missionbg.png'; // Main background image
import smallImage from '../Assets/about-img/mission.png'; // Smaller overlapping image
import missionicon from '../Assets/about-img/missionicon.png'; // Icon for training
import missionicon2 from '../Assets/about-img/missionicon2.png'; // Icon for partnerships

function Mission() {
  return (
    <div className="mission-wrapper">
      {/* Central Image */}
      <img src={centralImage} alt="Central Background" className="central-image" />

      {/* Overlapping Text Section */}
      <div className="content-section">
        <h1>Our Mission</h1>
        <p>
          Our mission is to provide value-based, high-quality <br />
          education and training. We empower young <br />
          learners and aspiring teachers through innovative <br />
          teaching practices and continuous support.
        </p>

        {/* High-quality training section */}
        <div className="sub-section">
          <div className="icon">
            <img src={missionicon} alt="Training Icon" />
          </div>
          <div className="text">
            <h3>High-quality training</h3>
            <p>
              Empowering young learners and aspiring <br />
              teachers with value-based, high-quality training.
            </p>
          </div>
        </div>

        {/* Beneficial partnerships section */}
        <div className="sub-section">
          <div className="icon">
            <img src={missionicon2} alt="Partnership Icon" />
          </div>
          <div className="text">
            <h3>Beneficial partnerships</h3>
            <p>
              Offering consistent support and marketing <br />
              assistance to our franchise partners.
            </p>
          </div>
        </div>
      </div>

      {/* Overlapping Image */}
      <div className="image-section">
        <img src={smallImage} alt="Small Overlapping" />
      </div>
    </div>
  );
}

export default Mission;
