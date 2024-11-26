import React from "react";
import "../styles/home-course.css";
import abacusImage from "../Assets/home-img/courseimg1.png";
import vedicImage from "../Assets/home-img/courseimg2.png";
import rubikImage from "../Assets/home-img/courseimg3.png";


const courses = [
  {
    id: 1,
    title: "Abacus",
    description: "Improve calculation speed and mental math skills",
    age: "4+",
    duration: "12 months",
    levels: "8 Levels",
    rating: 4.9,
    image: abacusImage, // Replace with actual image path
  },
  {
    id: 2,
    title: "Vedic Maths",
    description: "Learn faster and efficient ways of solving complex problems",
    age: "12+",
    duration: "6 months",
    levels: "2 Levels",
    rating: 4.9,
    image: vedicImage, // Replace with actual image path
  },
  {
    id: 3,
    title: "Rubik's Cube",
    description: "Enhance problem-solving and critical thinking",
    age: "7+",
    duration: "4 months",
    levels: "2 Levels",
    rating: 4.9,
    image: rubikImage, // Replace with actual image path
  },
];

const Courses = () => {
  return (
    <div className="courses">
      <h2>Our Courses</h2>
      <p className="subtitle">
        At Brave Sparkids Academy, we believe in nurturing the full potential
        of each child through a holistic approach to education
      </p>
      <div className="course-grid">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <img src={course.image} alt={course.title} className="course-image" />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <div className="course-info">
              <span>Age: {course.age}</span>
              <span>Duration: {course.duration}</span>
            </div>
            <button className="learn-more">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
