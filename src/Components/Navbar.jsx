import React from "react";
import "./ComponentsStyles/navbar.css";
const Navbar = () => {
  return (
    <div className="Navbar">
      <nav>
        <img
          src="http://4.bp.blogspot.com/-JO6KPiOuEvw/T_xqv95xmeI/AAAAAAAAAI8/cwQCTBaMFJU/s1600/Adidas+2_.png"
          alt="logo"
        />
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
