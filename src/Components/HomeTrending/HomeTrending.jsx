import React from "react";
import "./HomeTrending.css";
const HomeTrending = () => {
  return (
    <div className="home-trending">
      <div
        className="home-trending-card"
        style={{ backgroundImage: `url(/images/trendingBg.png)` }}
      >
        <div>
          <h2>Top Trending Used Cloth</h2>
          <h4>The world's most stylish women are buying right now</h4>
          <button>DISCOVER NOW</button>
        </div>
      </div>
      <div
        className="home-trending-card"
        style={{ backgroundImage: `url(/images/trendingBg2.png)` }}
      >
        <div>
          <h2>Top Trending Used Cloth</h2>
          <h4>The world's most stylish women are buying right now</h4>
          <button>DISCOVER NOW</button>
        </div>
      </div>
    </div>
  );
};

export default HomeTrending;
