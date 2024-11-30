import React from "react";
import "../styles/aboutushero.css"; 
import image from "../Assets/about-img/aboutushero.png"; 

const AboutHero = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <p className="pagename">Home |<span> About us</span> </p>
        <h1 className="headline">
          Inspiring Young Minds for a <br/><span>Brighter Tomorrow</span>
        </h1>
        <p className="subheadline">
          Empowering the Next Generation with Knowledge, Skills, and Confidence
        </p>
        <p className="description">
          Unlock your child’s potential with programs<br/> designed to sharpen skills,
          foster creativity, and <br/>nurture lifelong success.
        </p>
      </div>
      <div className="about-us-image">
        <img src={image} alt="About Us" />
      </div>
    </div>
  );
};

export default AboutHero;
