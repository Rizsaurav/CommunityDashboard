import React from "react";
import PlaceCard from "./PlaceCard";

// Import images from assets
import BirriaLandiaImg from "../assets/birria-landia.jpg";
import MysttikMasalaImg from "../assets/mysttik-masala.jpg";
import HalalGuysImg from "../assets/halal-guys.jpg";
import AwningImg from "../assets/awning.png";

const places = [
  { id: 1, name: "Birria-Landia", type: "Mexican", image: BirriaLandiaImg, link: "#" },
  { id: 2, name: "Mysttik Masala", type: "Indian", image: MysttikMasalaImg, link: "#" },
  { id: 3, name: "The Halal Guys", type: "Middle Eastern", image: HalalGuysImg, link: "#" }
];

const CommunityBoard = () => {
  return (
    <div className="community-board">
      <div className="board-header">
        <img className="awning" src={AwningImg} alt="Awning" />
        <h1>Food Truck Favorites</h1>
      </div>
      <div className="places-container">
        {places.map((place) => (
          <PlaceCard key={place.id} {...place} />
        ))}
      </div>
    </div>
  );
};

export default CommunityBoard;
