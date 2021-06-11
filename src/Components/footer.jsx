import React from "react";
// import { footerLinks1, footerLinks2, footerLinks3 } from "./footerlinks.js";
import logo from "../sparue.png";
import "./ComponentsStyles/footer.css";
const Footer = () => {
  const footerLinks1 = [
    {
      id: "link-1",
      name: "Contact us"
    },
    {
      id: "link-2",
      name: "Blogs"
    },
    {
      id: "link-3",
      name: "Case Studies"
    },
    {
      id: "link-4",
      name: "Testimonials"
    },
    {
      id: "link-5",
      name: "Support Center"
    }
  ];
  return (
    <div className="footer">
      <div className="footer-1">
        <div className="item-1">
          <img src={logo} alt="img-logo" />
          <div className="social-icons">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-youtube"></i>
          </div>
        </div>
        <div className="item-2">
          <h4>About Us</h4>
          <div className="nav-list">
            <ul>
              {footerLinks1.map((item) => {
                return (
                  <li key={item.id}>
                    <a href="/">{item.name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="item3">
          <h4>Quick Links</h4>
          <div className="nav-list">
            <ul>
              {footerLinks1.map((item) => {
                return (
                  <li key={item.id}>
                    <a href="/">{item.name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="item-4">
          <h4>Services</h4>
          <div className="nav-list">
            <ul>
              {footerLinks1.map((item) => {
                return (
                  <li key={item.id}>
                    <a href="/">{item.name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
