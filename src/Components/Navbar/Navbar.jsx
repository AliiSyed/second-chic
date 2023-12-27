import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="my-container">
        <div className="navbar-item">
          <div>
            <Link to={"/"}>Women</Link>
            <Link to={"/"}>Men</Link>
            <Link to={"/"}>Kids</Link>
            <Link to={"/"}>Accessories</Link>
            <Link to={"/"}>Luxury</Link>
            <div>
              <div>
                <img src="/images/messageIcon.png" alt="messageIcon.png" />
              </div>
              <div onClick={() => navigate("/favourite")}>
                <img src="/images/heartIcon.png" alt="heartIcon.png" />
              </div>
            </div>
          </div>
          <div>
            <button>SELL NOW</button>
            <div>
              <img src="/images/smartphone.png" alt="smartphone.png" />
              <Link to={"/"}>Download Our App</Link>
              <img src="/images/arrowDownIcon.png" alt="arrowDownIcon.png" />
            </div>
            <Link to={"/about"}>About us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
