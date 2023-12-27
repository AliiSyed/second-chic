import React from "react";
import "./AboutSpeciality.css";
import AboutSpecialityCard from "../../Components/AboutSpecialityCard/AboutSpecialityCard.jsx";
const AboutSpeciality = () => {
  return (
    <div className="my-container">
      <div className="about-speaciality-section1">
        <h2>Our Speciality</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam facere
          dolores beatae recusandae. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ullam facere dolores beatae recusandae.
        </p>
      </div>
      <div className="about-speaciality-section2">
        <AboutSpecialityCard />
        <AboutSpecialityCard />
        <AboutSpecialityCard />
        <AboutSpecialityCard />
      </div>
    </div>
  );
};

export default AboutSpeciality;
