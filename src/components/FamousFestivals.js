import React from 'react';
import "../styles/FamousFestivals.css";
import Fest1 from "../images/fest1.jpg";

const FamousFestivals = () => {
  return (
    <div className="festival-container">
      <div className="festival-image-card">
        <img src={Fest1} alt="Rathasaptami" className="festival-image" />
      </div>
      <div className="festival-details-card">
        <h2 className="festival-title">Rathasaptami</h2>
        <p className="festival-significance">
          Festival of Sun God “Lord Sri Suryanarayana Swamy”
        </p>
        <p className="festival-description">
          Month To celebrate:February
          <br/>
          Ratha Saptami is the most important festival celebrated in the Arasavalli temple, located in Srikakulam Town, Andhra Pradesh, India. Also known as Ratha Saptami or Rathasaptami or Magha Saptami, this festival symbolizes the transition from darkness to light, marking the end of winter and the beginning of spring.
          <br />
          It is believed that on this day, our bodies react chemically with the sun rays, promoting health. Mythologically, it is celebrated as the birthday of the Sun God. It is said that special rays and vibrations are present in the temple premises, and devotees receiving Teertha Prasadams will be blessed with wealth and health.
          <br />
          The Lord Surya Narayana Swamy has a chariot with one wheel drawn by seven horses, representing the seven colors of light (VIBGYOR). It is also noted that Lord Rama worshipped Surya before defeating Ravana.
          <br />
          On this auspicious day, devotees are allowed to have Nija Rupa Darshan. Ratha Saptami symbolizes the change of seasons to spring and the start of the harvesting season. By worshipping Lord Surya and observing fast on this day, one can rid themselves of all types of sins.
        </p>

      </div>
    </div>
  );
};

export default FamousFestivals;
