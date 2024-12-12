import React from 'react';
import "../styles/FamousFood.css"; 
import CashewImage from "../images/cashew.jpg"; 

const FamousFood = () => {
  return (
    <div className="food-card">
      <img src={CashewImage} alt="Cashew" className="food-image" />
      <div className="food-details">
        <h2 className="food-title">Cashew</h2>
        <p className="food-description">
          Cashews are a popular nut known for their creamy texture and rich flavor. They are often used in various dishes, from savory meals to sweet desserts, and are rich in essential nutrients. Widely preferred due to their rich taste and several health benefits, these cashew nuts are rich in fat, vitamins, proteins, and minerals. Further, these Raw Cashew Nuts are cleaned and processed in a hygienic environment in highly automated processing units. These are widely renowned for their properties like longer shelf life, high nutritional value, and impeccable taste. Palasa cashew market is the largest cashew kernel center in Andhra Pradesh state.
        </p>
      </div>
    </div>
  );
};

export default FamousFood;
