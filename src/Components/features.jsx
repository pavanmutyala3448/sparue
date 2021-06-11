import React from "react";
import "./ComponentsStyles/features.css";
const Features = () => {
  const data = [
    {
      id: "service-1",
      img:
        "https://lh3.googleusercontent.com/mIeBLLu8xOi-1bPbtRO_HYb5d1VchJDLDH4hebMO7R-GNOfueGDtHCKgPWFjwyCAORQ=w300",
      name: "AWS Database migrations",
      work: "By Using Search Engine Optimization You Will Get More Clients"
    },
    {
      id: "service-2",
      img:
        "https://lh3.googleusercontent.com/mIeBLLu8xOi-1bPbtRO_HYb5d1VchJDLDH4hebMO7R-GNOfueGDtHCKgPWFjwyCAORQ=w300",
      name: "Managed Cloud Services:",
      work: "By Using Search Engine Optimization You Will Get More Clients"
    },
    {
      id: "service-3",
      img:
        "https://lh3.googleusercontent.com/mIeBLLu8xOi-1bPbtRO_HYb5d1VchJDLDH4hebMO7R-GNOfueGDtHCKgPWFjwyCAORQ=w300",
      name: "AWS Devops",
      work: "By Using Search Engine Optimization You Will Get More Clients"
    },
    {
      id: "service-4",
      img:
        "https://lh3.googleusercontent.com/mIeBLLu8xOi-1bPbtRO_HYb5d1VchJDLDH4hebMO7R-GNOfueGDtHCKgPWFjwyCAORQ=w300",
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
