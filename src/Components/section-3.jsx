import React from "react";
import "./ComponentsStyles/Section3.css";
const Section3 = () => {
  const Data = [
    {
      id: "grid-1 grid",
      heading: "Search Optimization",
      content: "By using Search Engine Optimization, You will get more Clients."
    },
    {
      id: "grid-2 grid",
      heading: "Search Optimization",
      content: "By using Search Engine Optimization, You will get more Clients."
    },
    {
      id: "grid-3 grid",
      heading: "Search Optimization",
      content: "By using Search Engine Optimization, You will get more Clients."
    },
    {
      id: "grid-4 grid",
      heading: "Search Optimization",
      content: "By using Search Engine Optimization, You will get more Clients."
    }
  ];
  return (
    <div className="section3">
      <div className="inner-container">
        <h3>
          Our Quality feature that customers always prefer to use on their
          products.
        </h3>
        <p>
          Customers are our first priority and we provide some exceptional
          features that our customer prefers . That's why our customers never
          leave us .
        </p>
      </div>
      <div className="grid-container">
        {Data.map((item) => {
          return (
            <div className={item.id}>
              <div className="circle">
                <div
                  className="
                circle-1"
                ></div>{" "}
              </div>
              <div className="content">
                <h4>{item.heading}</h4>
                <p>{item.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Section3;
