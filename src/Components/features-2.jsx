import React from "react";
import "./ComponentsStyles/FeatureSection2.css";
const FeatureSection = () => {
  return (
    <div className="Section-2">
      <div className="left">
        <img
          src="https://images.unsplash.com/photo-1573497019414-e44d0759d00e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1607970420862-385a245239a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
      <div className="right">
        <h2>Great Responsive & Strong Competitive People</h2>
        <p>
          Some hardworking People are Working Day and Night to provide you
          highly scalable product .
        </p>
        <p>Amazing communication experience.</p>
        <p>Best designing experience with trending tools and sizes.</p>
        <p>Training and communication method remotely.</p>
        <p>24/7 Hour onine supports.</p>
        <button className="feature-btn-1">Discover Items</button>
      </div>
    </div>
  );
};
export default FeatureSection;
