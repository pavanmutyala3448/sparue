import React from "react";
import "./ComponentsStyles/Section6.css";

const Section6 = () => {
  return (
    <div className="Section-6">
      <div className="left-section">
        <div className="left-items">
          <h2>Contact with Us</h2>

          <p>
            It's very easy to get in touch with us. Just use the contact form or
            pay us a visit for a coffee at the office. Dynamically innovate
            competitive technology after an expanded array of leadership.
          </p>
        </div>
      </div>
      <div className="right-section">
        <div className="form">
          <h5>Reach Us Quickly</h5>
          <form>
            <div className="grid-content">
              <input type="text" placeholder="Enter Name" />
              <input type="email" placeholder="Enter Email" />
              <input type="text" placeholder="Enter Your Phone" />
              <input type="text" placeholder="Enter Your Company" />
              <input type="text" placeholder="Message" className="Message" />
            </div>
            <button className="btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Section6;
