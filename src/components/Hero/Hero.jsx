import React from "react";
import HeroImage from "../../Assets/6101073.jpg";
import { HeroContainer, HeroImageContainer } from "./style-hero";

const Hero = ({ setModal }) => {
  return (
    <HeroContainer className="content_area">
      <h1>Creativity starts with viewing the whole world differently</h1>
      <p>A service agency with customer satisfaction</p>

      <HeroImageContainer>
        <img src={HeroImage} alt="heroImage" className="image__style" />
        <button
          type="button"
          onClick={() => {
            setModal(true);
          }}
        >
          Get Started
        </button>
      </HeroImageContainer>
    </HeroContainer>
  );
};

export default Hero;
