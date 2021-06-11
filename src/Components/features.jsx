import React from "react";
import "./ComponentsStyles/features.css";
import png1 from "../images/png1.png";
import png2 from "../images/png2.png";
import png3 from "../images/png3.png";
import png4 from "../images/png4.png";
const Features = () => {
  const data = [
    {
      id: "service-1",
      img: png1,
      name: "AWS Database migrations",
      work: "By Using Search Engine Optimization You Will Get More Clients"
    },
    {
      id: "service-2",
      img: png2,
      name: "Managed Cloud Services",
      work: "By Using Search Engine Optimization You Will Get More Clients"
    },
    {
      id: "service-3",
      img: png3,
      name: "AWS Devops",
      work: "By Using Search Engine Optimization You Will Get More Clients"
    },
    {
      id: "service-4",
      img: png4,
      name: "Security in the Cloud –AWS",
      work: "By Using Search Engine Optimization You Will Get More Clients"
    }
  ];
  return (
    <div className="features">
      <h3>Featured Service That We Provide</h3>
      <div className="services">
        {data.map((item) => {
          return (
            <div className={item.id} key={item.id}>
              <img src={item.img} alt="" />
              <h3>{item.name}</h3>
              <p>{item.work}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Features;
