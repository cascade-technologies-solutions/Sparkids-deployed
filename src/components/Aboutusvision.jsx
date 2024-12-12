import React from "react";
import "../styles/aboutusvision.css"; 
import visionImage from "../Assets/about-img/aboutusvision.png";
const MissionVision = () => {
  return (
    <div className="our-vision-container">
      <div className="our-vision-image">
        <img src={visionImage} alt="Our Vision" className="vision-image" />
      </div>
      <div className="our-vision-content">
        <h2 className="vision-title">Our Vision</h2>
        <p className="vision-description">
          To ignite the potential of students and aspiring educators, especially
          from rural areas, helping them achieve success on a global scale.
        </p>
        <p className="vision-subtext">
          We aim to be a leader in educational and employment training, bringing
          about positive change through quality education.
        </p>
      </div>
    </div>
  );
};

export default MissionVision;