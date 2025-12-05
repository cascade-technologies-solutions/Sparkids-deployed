import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "../styles/ContactBranches.css";
import media1 from "../Assets/contact-img/media1.png";
import media2 from "../Assets/contact-img/media2.png";
import media3 from "../Assets/contact-img/media3.png";

const BranchCarousel = () => {
  const branches = [
    {
      title: "Sparkids Abacus Learning Point, Vijayapur",
      mapSrc: "https://www.google.com/maps?q=16.839444,75.711194&output=embed",
      description: "Description",
    },
    {
      title: "Chinmay Lok Sparkids Abacus Learning Point, Vijayapur",
      mapSrc: "https://www.google.com/maps?q=16.839444,75.711194&output=embed",
      description: "Description",
    },
    {
      title: "Samruddhi Sparkids Abacus Learning Point Vijayapur",
      mapSrc: "https://www.google.com/maps?q=16.817917,75.740889&output=embed",
      description: "Description",
    },
    {
      title: "Chinmay Lok Sparkids Abacus Learning Point, Vijayapur (2nd Branch)",
      mapSrc: "https://www.google.com/maps?q=16.823944,75.727167&output=embed",
      description: "Description",
    },
    {
      title: "Haripriya Sparkids Abacus Learning Point Vijayapur",
      mapSrc: "https://www.google.com/maps?q=16.826583,75.728722&output=embed",
      description: "Description",
    },
  ];

  return (
    <div className="branch-carousel">
      <h2 className="branches-heading">All available branches</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          431: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {branches.map((branch, index) => (
          <SwiperSlide key={index}>
            <div className="branch-card">
              <h3>{branch.title}</h3>
              <iframe
                src={branch.mapSrc}
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: "8px" }}
                allowFullScreen=""
                loading="lazy"
                title={`${branch.title} Map`}
              ></iframe>
              <p>{branch.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Social Icons Section */}
      <div className="contact-social-section">
        <h2 className="contact-social-section-heading">
          Follow Us for Updates and Inspiring Stories!
        </h2>
        <div className="contact-social-icons">
          <a href="#facebook" className="social-link">
            <div className="icon-container">
              <i className="fab fa-facebook-f"></i>
            </div>
            <span>Facebook</span>
          </a>
          <a href="#linkedin" className="social-link">
            <div className="icon-container">
              <i className="fab fa-linkedin-in"></i>
            </div>
            <span>LinkedIn</span>
          </a>
          <a href="#instagram" className="social-link">
            <div className="icon-container">
              <i className="fab fa-instagram"></i>
            </div>
            <span>Instagram</span>
          </a>
        </div>
      </div>
      <div className="media-section">
        <h2 className="media-section-heading ">Watch our social media posts</h2>
        <p className="media-section-redirect">
          <a href="#instagram">redirect Instagram &gt;</a>
        </p>
        <div className="media-gallery">
        <img src={media1} alt="post1" />
        <img src={media2} alt="post2" />
        <img src={media3} alt="post3" />
        <img src={media2} alt="post4" />
                 </div>
        <p className="contact-footer-text">
          Every great mind was once a curious child. Let’s spark that curiosity together!
        </p>
      </div>
    </div>
  );
};

export default BranchCarousel;