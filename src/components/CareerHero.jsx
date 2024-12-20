import React from "react";
import "../styles/CareerHero.css"; 
import heroImage from "../Assets/career-img/careerhero.png";

const CareerHero = () => {
  return (
    <div className="careerhero-container">
      {/* Page breadcrumb */}
      <div>
        <p className="careerhero-pagename">
          Home | <span>Careers</span>
        </p>
      </div>
      <div className="careerhero-sub-container">
        <div className="careerhero-content">
          <p className="careerhero-subheadline">Nurturing environment</p>
          <h1 className="careerhero-headline">
            Your Next Career<br />
            <span>Move Starts Here!</span>
          </h1>
          <p className="careerhero-description">
            Join our mission to inspire, educate the next generation. We're
            looking for passionate individuals to become part of our growing
            team.
          </p>
          <a href="#contact-us" className="careerhero-button">
            Contact us
          </a>
        </div>

        {/* Image */}
        <div className="careerhero-image">
          <img src={heroImage} alt="Career Hero" />
        </div>
      </div>
    </div>
  );
};

export default CareerHero;
