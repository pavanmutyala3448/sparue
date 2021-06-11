import React from "react";
import "./ComponentsStyles/navbar.css";
import logo from "../sparue.png";
const Navbar = () => {
  return (
    <div className="Navbar">
      <nav>
        <img src={logo} alt="logo" />
        <ul>
          <li>
            <a href="/Home">Home</a>
          </li>
          <li>
            <a href="/Home">Services</a>
          </li>
          <li>
            <a href="/Home">Case Study</a>
          </li>
          <li>
            <a href="/Home">About us</a>
          </li>
        </ul>
        <button>Contact Us</button>
      </nav>
    </div>
  );
};
export default Navbar;
