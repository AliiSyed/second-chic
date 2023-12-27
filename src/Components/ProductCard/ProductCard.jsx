import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
const ProductCard = () => {
  const navigate = useNavigate();
  return (
    <div
      className="product-card"
      onClick={() => navigate("/products/12345678/details")}
    >
      <img src="/images/heartIcon.png" alt="heartIcon.png" />
      <div>
        <h5>Product Name Here</h5>
        <h4>$18.00</h4>
      </div>
    </div>
  );
};

export default ProductCard;
