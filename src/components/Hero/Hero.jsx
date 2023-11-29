import React from "react";
import HeroImage from "../../Assets/board-teaching.jpg";
import { HeroContainer, HeroImageContainer, HeroStyled } from "./style-hero";

const Hero = ({ setModal }) => {
  return (
    <HeroStyled>
      <div className="element">
        <div>
          <h1 className="element__heading">
            Developing Skills for the Future of Work!
          </h1>
          <p className="element__subheading">
            Creating a Workforce for the Future!
          </p>
        </div>
        <button
          className="button__style"
          type="button"
          onClick={() => {
            setModal(true);
          }}
        >
          Get Started
        </button>
      </div>
      <HeroImageContainer>
        <img src={HeroImage} alt="heroImage" className="image__style" />
      </HeroImageContainer>
    </HeroStyled>
  );
};

export default Hero;
