import React from "react";
import "./About.css";
import AboutBanner from "../../Components/AboutBanner/AboutBanner.jsx";
import AboutSpeciality from "../../Components/AboutSpeciality/AboutSpeciality.jsx";
import AboutJoin from "../../Components/AboutJoin/AboutJoin.jsx";
import AboutArround from "../../Components/AboutArround/AboutArround.jsx";

const About = () => {
  return (
    <div className="about">
      <AboutBanner />
      <AboutSpeciality />
      <div className="about-secion1">
        <img src="/images/addidas.png" alt="addidas.png" />
        <img src="/images/calvin.png" alt="calvin.png" />
        <img src="/images/puma.png" alt="puma.png" />
        <img src="/images/garnier.png" alt="garnier.png" />
        <img src="/images/pepsi.png" alt="pepsi.png" />
        <img src="/images/samsung.png" alt="samsung.png" />
      </div>
      <AboutJoin />
      <AboutArround />
    </div>
  );
};

export default About;
