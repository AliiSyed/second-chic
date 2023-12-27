import React from "react";
import "./HomeCategory.css";
import ProductCard from "../../Components/ProductCard/ProductCard.jsx";
import PopularCard from "../../Components/PopularCard/PopularCard.jsx";
const HomeCategory = () => {
  return (
    <div className="home-category">
      <div className="my-container">
        <div className="home-category-items">
          <div className="home-category-section1">
            <h2>Category</h2>
            <h4>
              The point of using Lorem Ipsum is that it has more-or-less normal
            </h4>
            <div>
              <button>WOMEN</button>
              <button>MEN</button>
              <button>KIDS</button>
              <button>ACCESSORIES</button>
              <button>LUXURY</button>
            </div>
          </div>
          <div className="home-category-section2">
            <ProductCard image="productCardBg" />
            <ProductCard image="productCardBg2" />
            <ProductCard image="productCardBg3" />
            <ProductCard image="productCardBg4" />
          </div>
          <h2>Popular Items</h2>
          <div className="home-category-section2">
            <PopularCard image="popularCard" />
            <PopularCard image="popularCard2" />
            <PopularCard image="popularCard3" />
            <PopularCard image="popularCard4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
