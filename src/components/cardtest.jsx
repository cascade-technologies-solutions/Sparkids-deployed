import React from "react";
import courseimg1 from "../Assets/home-img/courseimg1.png";
import courseage from "../Assets/home-img/course-age.png";
import coursetime from "../Assets/home-img/course-time.png";
import courselevel from "../Assets/home-img/course-level.png";
import courserate from "../Assets/home-img/course-rate.png";
import courseLearnMore from "../Assets/home-img/course-learnmore.png";
import learnmorebulb from "../Assets/home-img/learnmorebulb.png";

const CourseCard = ({ title, description, age, duration, levels, rating, image }) => {
  const cardStyle = {
    position: "relative",
    width: "334px",
    height: "502px",
    overflow: "visible",
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#fff",
    margin: "20px",
    borderRadius: "40px 40px 10px 10px ",
    boxShadow: "0 5px 20px rgba(0, 0, 0, 0.6)",
  };

  const imageStyle = {
    width: "334px", // Ensure image spans the full width of the card
    height: "337px",
    objectFit: "cover", // Maintain aspect ratio and cover the space
    borderRadius: "10px 10px 0 0", // Rounded corners for the top of the image
  };

  const contentStyle = {
    padding: "0 10px",
    width: "313px",
    height: "165px",
    margintTop: "10px",
    borderRadius: "0 0 10px 10px", // Glow at the bottom
  };

  const titleRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width:'300px',
    marginBottom: "10px",
  };

  const titleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
  };

  const ratingStyle = {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    fontSize: "18.66px",
    color: "#555",
    marginBottom: "5px",
  };

  const descriptionStyle = {
    fontSize: "18.66px",
    color: "#555",
    marginBottom: "15px",
  };

  const infoContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    fontSize: "18.66px",
    marginBottom: "10px",
    color:'#555',
  };

  const columnStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  };

  const infoRowStyle = {
    display: "flex",
    marginRight: "80px",
    gap: "8px",
    width:"120px",
  };

  const iconStyle = {
    width: "20px",
    height: "20px",
    objectFit: "contain",
  };

  const learnMoreStyle = {
    position: "absolute",
    bottom: "-25px",
    right: "-105px",
    transform: "translateX(-50%)",
    width: "161px",
    height: "71px",
    zIndex: 10,
  };

  const learnMoretext = {
    position: "absolute",
    bottom: "-46px",
    right: "-140px",
    transform: "translateX(-50%)",
    width: "161px",
    height: "71px",
    zIndex: 10,
    fontFamily: 'KoHo',
    fontSize: "17px",
    cursor: "pointer",
    color:"white"
  };

  return (
    <div style={cardStyle}>
      {/* Main Image */}
      <img src={image} alt="Course" style={imageStyle} />

      <div style={contentStyle}>
        {/* Title and Rating */}
        <div style={titleRowStyle}>
          <span style={titleStyle}>{title}</span>
          <div style={ratingStyle}>
            <img src={courserate} alt="Rating" style={iconStyle} />
            {rating}
          </div>
        </div>

        {/* Description */}
        <p style={descriptionStyle}>{description}</p>

        {/* Information Section */}
        <div style={infoContainerStyle}>
          {/* Column 1 */}
          <div style={columnStyle}>
            <div style={infoRowStyle}>
              <img src={courseage} alt="Age" style={iconStyle} />
              Age {age}
            </div>
            <div style={infoRowStyle}>
              <img src={coursetime} alt="Duration" style={iconStyle} />
               {duration}
            </div>
          </div>

          {/* Column 2 */}
          <div style={columnStyle}>
            <div style={infoRowStyle}>
              <img src={courselevel} alt="Levels" style={iconStyle} />
            {levels} Levels
            </div>
          </div>
        </div>
      </div>

      {/* Learn More Button */}
      <img src={courseLearnMore} alt="Learn More" style={learnMoreStyle} />
      <div style ={learnMoretext}> 
        Learnmore <img src={learnmorebulb} alt="Learnmore bulb" style={{width:"22px",height:"21px",objectFit:"contain"}} />

      </div>
    </div>
  );
};

const CourseList = () => {
  const courseData = [
    {
      title: "Abacus",
      description: (<>Improve calculation speed and <br/>mental math skills.</>),
      age: "4+",
      duration: "12 months",
      levels: "8",
      rating: "4.9",
      image: courseimg1,
    },
    {
      title: "Vedic Maths",
      description: (<>Learn faster and efficient ways <br/> of solving complex problems.</>),
      age: "12+",
      duration: "6 months",
      levels: "2",
      rating: "4.9",
      image: courseimg1,
    },
    {
      title: "Rubik's Cube",
      description: (<>Enhance problem-solving and <br/> critical thinking skills.</>),
      age: "7+",
      duration: "4 months",
      levels: "2",
      rating: "4.9",
      image: courseimg1,
    },
  ];

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    padding: "40px",
    backgroundColor: "#f9f9f9",
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "20px",
    fontFamily: "'Arial', sans-serif",
    fontWeight: "bold",
    fontSize: "24px",
    color: "#333",
  };

  return (
    <div>
      <h2 style={headingStyle}>Our Courses</h2>
      <div style={containerStyle}>
        {courseData.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
