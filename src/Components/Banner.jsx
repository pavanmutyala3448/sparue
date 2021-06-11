import React from "react";
import "./ComponentsStyles/Banner.css";
const Banner = () => {
  return (
    <div className="banner">
      <div className="left-portion">
        <div className="content">
          <h1>With,Knowledge ,passion,Heart & Soul Agencies</h1>
          <p>
            Agencies around the world are moving to the digital agencies. So, It
            is high time to introduce your agency digitaly .
          </p>
          <button className="banner-btn-1">Learn More</button>
          <button className="banner-btn-2">Watch Works</button>
        </div>
      </div>
      <div className="right-portion">
        <div className="developer">
          <img
            src="https://www.vervelogic.com/images/img/hire-developer/rajeev-sir.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Banner;
