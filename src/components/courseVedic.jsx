import React from "react";
import "../styles/courseVedic.css";
import point from "../Assets/courses-img/checkpoint.png";
import vedicImage from "../Assets/courses-img/coursevedic.png";

const vedicCourse = () => {
  return (
    <div className="vedic-section">
      {/* Left Content Section */}
      <div className="vedic-content">
        <h2 className="vedic-heading">Abacus</h2>
        <p className="vedic-description">
          Unlock the full potential of your child's <br/>Mathematical abilities with our <br/>comprehensive Abacus Course.
        </p>
        <ul className="vedic-points">
          <li>
            <span>Designed to enhance focus</span>
            <img src={point} alt="point" />
          </li>
          <li>
            <span>Faster problem-solving skills and <br/>mental agility</span>
            <img src={point} alt="point" />
          </li>
          <li>
            <span>Visualization & Concentration</span>
            <img src={point} alt="point" />
          </li>
        </ul>
        <a href="#know-more" className="vedic-button">
          Know more &gt;
        </a>
      </div>

      {/* Right Image Section */}
      <div className="vedic-image">
        <img src={vedicImage} alt="vedic Course" />
      </div>
    </div>
  );
};

export default vedicCourse;