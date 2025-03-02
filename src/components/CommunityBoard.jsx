import React from "react";
import PlaceCard from "./PlaceCard";
import "./CommunityBoard.css"; 


import AwningImg from "../assets/awning.png";
import BirriaLandiaImg from "../assets/birria-landia.jpg";
import MysttikMasalaImg from "../assets/mysttik-masala.jpg";
import HalalGuysImg from "../assets/halal-guys.jpg";
import ChickFilAImg from "../assets/chick.jpeg";
import GrinsImg from "../assets/grins.jpeg";
import HalalImg from "../assets/halal.jpeg";
import MochasImg from "../assets/mochas.jpeg";
import NorthImg from "../assets/north.jpg";
import PitaImg from "../assets/pita.jpg";
import StacksImg from "../assets/stacks.jpg";
import TacosImg from "../assets/tacoos.webp";
import TaiwanImg from "../assets/taiwan.jpg";

const places = [
  { id: 1, name: "Birria-Landia", type: "Mexican", image: BirriaLandiaImg, link: "#" },
  { id: 2, name: "Mysttik Masala", type: "Indian", image: MysttikMasalaImg, link: "#" },
  { id: 3, name: "The Halal Guys", type: "Middle Eastern", image: HalalGuysImg, link: "#" },
  { id: 4, name: "Chick-fil-A", type: "Fast Food", image: ChickFilAImg, link: "#" },
  { id: 5, name: "Grins Restaurant", type: "American", image: GrinsImg, link: "#" },
  { id: 6, name: "Halal Shack", type: "Middle Eastern", image: HalalImg, link: "#" },
  { id: 7, name: "Mochas & Javas", type: "Coffee Shop", image: MochasImg, link: "#" },
  { id: 8, name: "North Street Cafe", type: "Cafe", image: NorthImg, link: "#" },
  { id: 9, name: "Pita Pit", type: "Mediterranean", image: PitaImg, link: "#" },
  { id: 10, name: "Stacks Pancake House", type: "Breakfast", image: StacksImg, link: "#" },
  { id: 11, name: "Taco Truck", type: "Mexican", image: TacosImg, link: "#" },
  { id: 12, name: "Taiwan Cafe", type: "Asian", image: TaiwanImg, link: "#" }
];

const CommunityBoard = () => {
  return (
    <div className="community-board">
      <div className="board-container"> {/* 🔥 Wrap everything in a box */}
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
    </div>
  );
};

export default CommunityBoard;