import React from "react";
import "../styles/AbacusHero.css"; 
import courseabacus from "../Assets/courses-img/abacuscourse.png";
import courseage from "../Assets/home-img/course-age.png";
import coursetime from "../Assets/home-img/course-time.png";
import courselevel from "../Assets/home-img/course-level.png";

const AboutUs = () => {
  return (
    <div className="abacus-container">
      <div className="abacus-content">
        <p className="pagename">Home | Course |<span> Abacus</span> </p>
        <div className="abacus-section">
      {/* Left Content Section */}
      <div className="abacus-content">
        <h2 className="abacus-heading">Abacus</h2>
        
        <ul className="abacus-points">
          <p className="abacus-points-wholelist">
            <div className="abacus-points-list">
            <img src={courselevel} alt="point" />
            <span>Level :</span>  8 Levels | 5-Basics and 3-Advanced
            </div>
          <br/>
          <div className="abacus-points-list">
            <img src={courseage} alt="point" />
           
            <span> Age : </span> 4 years +
            </div>
          <br/>
          <div className="abacus-points-list">
            <img src={coursetime} alt="point" />
           <span>Duration</span> 12 Months
           </div>
           <br/><br/><div className="abacus-subcontent"> 
           <li>Review : ⭐⭐⭐⭐⭐ 4.9</li>
          
           <li>Held Across <span> 20+</span>Franchises</li> 
         
          <li> Actively<span> 3000 +</span> students learning</li>
            </div> 
           </p>

        </ul>
        <a href="#know-more" className="abacus-button">
          Enroll Now
        </a>
      </div>

      {/* Right Image Section */}
      <div className="abacus-image">
        <img src={courseabacus} alt="Abacus Course" />
      </div>
    </div>
    </div>
    </div>
  
  );
};

export default AboutUs;