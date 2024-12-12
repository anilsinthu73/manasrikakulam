import React from 'react';
import "../styles/AgricultureProduction.css";
import WheatImage from "../images/wheat.jpeg"; 
import RiceImage from "../images/rice.jpeg"; 
import CornImage from "../images/corn.jpeg";
import SoybeanImage from "../images/soyabean.jpeg";

const AgriculturalProduction = () => {
  const crops = [
    {
      name: "Wheat",
      image: WheatImage,
      description: "Wheat is a staple food for billions and is primarily used to make flour for bread and pasta."
    },
    {
      name: "Rice",
      image: RiceImage,
      description: "Rice is a vital food source for more than half of the world's population, especially in Asia."
    },
    {
      name: "Corn (Maize)",
      image: CornImage,
      description: "Corn is used for food, animal feed, and industrial products, known for its versatility."
    },
    {
      name: "Soybeans",
      image: SoybeanImage,
      description: "Soybeans are a significant source of protein and oil, used in food products and biofuels."
    }
  ];

  return (
    <div className="agricultural-production">
      {crops.map((crop, index) => (
        <div key={index} className="crop-card">
          <img src={crop.image} alt={crop.name} className="crop-image" />
          <div className="crop-details">
            <h2 className="crop-title">{crop.name}</h2>
            <p className="crop-description">{crop.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AgriculturalProduction;
