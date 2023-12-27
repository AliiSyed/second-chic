import React from "react";
import FavouriteCard from "../../Components/FavouriteCard/FavouriteCard.jsx";
import "./Favourite.css";
const Favourite = () => {
  return (
    <div className="favourite">
      <div className="my-container">
        <div className="favourite-item">
          <h2>Favourites</h2>
          <div className="favourite-card-container">
            <FavouriteCard />
            <FavouriteCard />
            <FavouriteCard />
            <FavouriteCard />
            <FavouriteCard />
            <FavouriteCard />
            <FavouriteCard />
            <FavouriteCard />
            <FavouriteCard />
            <FavouriteCard />
            <FavouriteCard />
            <FavouriteCard />
            <FavouriteCard />
            <FavouriteCard />
            <FavouriteCard />
            <FavouriteCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favourite;
