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
        <img src="images/aboutCompany.png" alt="aboutCompany.png" />
      </div>
      <AboutJoin />
      <AboutArround />
    </div>
  );
};

export default About;
