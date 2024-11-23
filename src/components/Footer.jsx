import React from "react";
import logo from "../Assets/logo.png";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Us Section */}
        <div className="footer-section address">
          <img src={logo} alt="Brave SparkKids Logo" className="footer-logo" />
          <h3>Contact Us</h3>
          <p>Call: +91 82170 77217 <br />
           Email: example@mail.com</p>
          <p>
            Address: Indi Regional Office<br />
            Behind BSNL Tower, Near Mallikarjun Temple,<br />
            Vidya Nagar, Sindagi Road, Indi - 586209
          </p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-dribbble"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        {/* Explore Section */}
        <div className="footer-section">
          <h3>Explore</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Franchises</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Courses Section */}
        <div className="footer-section">
          <h3>Courses</h3>
          <ul>
            <li><a href="#">Abacus</a></li>
            <li><a href="#">Vedic Maths</a></li>
            <li><a href="#">Rubik’s Cube</a></li>
            <li><a href="#">Writing</a></li>
            <li><a href="#">Reading</a></li>
          </ul>
        </div>

        {/* Resources Section */}
        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li><a href="#">FAQ’s</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Policies</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section subscribe">
          <h3>Subscribe to News Letters</h3>
          <p>Stay in the loop with the latest news and <br/> updates from SparkKids.</p>
          <form>
            <input type="email" placeholder="Email here" />
            <button type="submit">Subscribe Now</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Brave SparkKids, Inc. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
