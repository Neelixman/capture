import React from "react";
import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>

          <div className="hide">
            <h2>
              our <span>dreams</span> come
            </h2>
          </div>

          <div className="hide">
            <h2>true</h2>
          </div>
        </div>
        <p>Contact us for any photography or videography ideas that you have. We have professional developers that work to make your imaginations come to life</p>
        <button>Contact Us</button>
      </div>

      <div className="image">
        <img src={home1} alt="Home 1, guy with a camera" />
      </div>
    </div>
  );
};

export default AboutSection;
