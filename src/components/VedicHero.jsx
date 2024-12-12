import React from "react";
import "../styles/commoncourse.css"; 
import coursevedic from "../Assets/courses-img/coursevedic.png";
import courseage from "../Assets/home-img/course-age.png";
import coursetime from "../Assets/home-img/course-time.png";
import courselevel from "../Assets/home-img/course-level.png";

const VedicHero = () => {
  return (
    <div className="maincourse-container">
      <div className="maincourse-content">
        <p className="pagename">Home | Course |<span> Vedic</span> </p>
        <div className="maincourse-section">
      {/* Left Content Section */}
      <div className="maincourse-content">
        <h2 className="maincourse-heading">Vedic</h2>
        
        <ul className="maincourse-points">
          <p className="maincourse-points-wholelist">
            <div className="maincourse-points-list">
            <img src={courselevel} alt="point" />
            <span>Level :</span>  2 Levels
            </div>
          <br/>
          <div className="maincourse-points-list">
            <img src={courseage} alt="point" />
           
            <span> Age : </span> 12 years +
            </div>
          <br/>
          <div className="maincourse-points-list">
            <img src={coursetime} alt="point" />
           <span>Duration</span> 6 Months
           </div>
           <br/><br/><div className="maincourse-subcontent"> 
           <li>Review : ⭐⭐⭐⭐⭐ 4.9</li>
          
           <li>Held Across <span> 20+</span>Franchises</li> 
         
          <li> Actively<span> 3000 +</span> students learning</li>
            </div> 
           </p>

        </ul>
        <a href="#know-more" className="maincourse-button">
          Enroll Now
        </a>
      </div>

      {/* Right Image Section */}
      <div className="maincourse-image" >
        <img src={coursevedic} alt="Abacus Course" style={{ width: "421px",
         height: "584px" , marginTop:'5px',borderRadius: '20px' }} />
      </div>
    </div>
    </div>
    </div>
  
  );
};

export default VedicHero;