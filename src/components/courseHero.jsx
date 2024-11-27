import React from "react";
import "../styles/courseHero.css"; 
import image from "../Assets/courses-img/coursehero.png"; 

const coursehero = () => {
  return (
    <div className="coursehero-container">
      <div className="coursehero-content">
        <p className="coursehero-pagename">Home |<span> Courses</span> </p>
        <h1 className="coursehero-headline1">
          Empowering</h1>
          <h1 className="coursehero-headline2"> <br/><span> Tomorrow's <br/> Leaders,</span>Today!
        </h1>
        <p className="coursehero-subheadline">
          Transformative courses that go beyond <br/> traditional learning.
        </p>
        <p className="coursehero-description">
          Our programs cater to young minds from <br/> all walks of life.
        </p>
      </div>
      <div className="coursehero-image">
        <img src={image} alt="About Us" />
      </div>
    </div>
  );
};

export default coursehero;