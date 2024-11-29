import React from 'react';
import person from '../Assets/home-img/person1.jpg';
import brain from '../Assets/home-img/brain.png';
import '../styles/hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-heading">Empower your <br/>
          <span>Child's Mind</span>
        </h1>
        <p className="hero-subtitle">With Brave Sparkids Academy</p>
        <p className="hero-description">
          Unlock your child’s potential with programs designed <br/> to
           sharpen skills, foster creativity, and <br/> nurture lifelong success.
        </p>
        <div className="hero-buttons">
          <button className="explore-btn">Explore Courses</button>
          <button className="opportunity-btn glow">Get opportunity</button>
        </div>
        <div className="hero-stats">
          <div className="stats-images">
            <img src={person} alt="Student 1" />
            <img src={person} alt="Student 2" />
            <img src={person} alt="Student 3" />
          </div>
          <p className="stats-text">
            <h1>9000+ Students <br/><span className="highlight"> have started their studies </span> </h1>
          </p>
        </div>
        <p className="opportunity-note">
          <h1>
            More than <span className="highlight">50+</span> opportunitys <br/> partner with us
          </h1>
        </p>
      </div>
      <div className="hero-image">
        <img src={brain} alt="Brain Illustration" />
      </div>  
    </section>
  );
};

export default Hero;
