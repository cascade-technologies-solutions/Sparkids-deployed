import React from "react";
import "../styles/aboutusculture.css"; 
import culture from "../Assets/about-img/aboutusculture.png";
import point from "../Assets/courses-img/checkpoint.png";
const Culture = () => {
  return (
    <div className="our-culture">
    <div className="our-culture-container">
      
      <div className="our-culture-content">
        <h2 className="culture-title">Our Culture</h2>
        <p className="culture-description">
   We are driven by the joy of seeing children <br/> grow and thrive , Our team is made up of <br/>
   experienced educators, passionate trainers, <br/> and dedicated support staff.
        </p>
        <div  className="culture-sub-div">
            <div className="culture-subdiv-image" >
            <img src={point} alt="culture" />
            </div>
            <div className="culture-subdiv-point">
                <p> Commitment to Quality</p>
            </div>
            <div className="culture-subdiv-image" >
            <img src={point} alt="culture" />
            </div>
            <div className="culture-subdiv-point">
                <p> Interactive, child-centered teaching <br/> methods.</p>
            </div>
            <div className="culture-subdiv-image" >
            <img src={point} alt="culture" />
            </div>
            <div className="culture-subdiv-point">
                <p> Building trust with our student,<br/> families, and partners.</p>
            </div>
        </div>
        
      </div>



      <div className="our-culture-container">
      <div className="our-culture-image">
        <img src={culture} alt="Our Culture" className="culture-image" />
      </div>
    </div>
  </div>
  </div>
  );
};

export default Culture;