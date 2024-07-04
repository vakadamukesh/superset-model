import React from "react";
import { FaMicrosoft, FaApple } from "react-icons/fa";
import { SiTesla } from "react-icons/si";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: "Gachibowli, Hyderabad-500046-Get Microsoft India Pvt. Ltd.",
      openPositions: 10,
      icon: <FaMicrosoft />,
    },
    {
      id: 2,
      title: "Tesla",
      location: "Block A, Prestige Platina Tech Park, Kadubeesanahalli, Bengaluru, Karnataka 560087, India",
      openPositions: 5,
      icon: <SiTesla />,
    },
    {
      id: 3,
      title: "Apple",
      location: "Number 3, RMZ Infinity Tower – E, Old Madras Road, Bangalore 560016, India",
      openPositions: 20,
      icon: <FaApple />,
    },
  ];
  return (
    <div className="companies">
      <div className="container">
        <h3>TOP COMPANIES</h3>
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="content">
                  <div className="icon">{element.icon}</div>
                  <div className="text">
                    <p>{element.title}</p>
                    <p>{element.location}</p>
                  </div>
                </div>
                <button>Open Positions {element.openPositions}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;
