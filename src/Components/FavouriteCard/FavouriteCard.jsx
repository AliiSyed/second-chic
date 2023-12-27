import React from "react";
import "./FavouriteCard.css";
import { useNavigate } from "react-router-dom";
const FavouriteCard = () => {
  const navigate = useNavigate();
  return (
    <div
      className="favourite-card"
      onClick={() => navigate("/products/12345678/details")}
    >
      <div className="favourite-card-image">
        <div>
          <p>Featured</p>
          <p>10.34% OFF</p>
        </div>
        <div>
          <img src="/images/heartIcon.png" alt="heartIcon.png" />
        </div>
      </div>
      <div className="favourite-card-text">
        <p>Lorem Ipsunm is simply Dummy Content for website</p>
        <h2>100 AED</h2>
        <div>
          <h4>110 AED incl.</h4>
          <img
            src="/images/securityCheckIcon.png"
            alt="securityCheckIcon.png"
          />
        </div>
        <h4>L</h4>
        <h4>Nike</h4>
      </div>
    </div>
  );
};

export default FavouriteCard;
