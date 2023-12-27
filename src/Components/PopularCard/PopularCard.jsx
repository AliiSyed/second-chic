import React from "react";
import "./PopularCard.css";
import { useNavigate } from "react-router-dom";
const PopularCard = ({ image }) => {
  const navigate = useNavigate();
  return (
    <div
      className="popular-card"
      onClick={() => navigate("/products/12345678/details")}
    >
      <div
        style={{ backgroundImage: `url(/images/${image}.png)` }}
        className="popular-card-image"
      >
        <img src="/images/heartIcon.png" alt="heartIcon.png" />
      </div>
      <div className="popular-card-text">
        <p>
          Women Chiffon Solid Pure Basic Soft Red Blouses Tops Summer Top Casual
          Loose
        </p>
        <button>L</button>
        <h4>$ 45.00</h4>
      </div>
    </div>
  );
};

export default PopularCard;
