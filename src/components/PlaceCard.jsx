import React from "react";
import "./PlaceCard.css";

const PlaceCard = ({ name, type, image, link }) => {
  return (
    <div className="place-card">
      <img src={image} alt={name} className="place-image" />
      <div className="place-info">
        <h3>{name}</h3>
        <p>{type}</p>
        <a href={link} className="view-menu-btn">View Menu</a>
      </div>
    </div>
  );
};

export default PlaceCard;
