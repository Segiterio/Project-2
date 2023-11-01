import React from "react";
import HeroImage from "../../Assets/board-teaching.jpg";
import { HeroContainer, HeroImageContainer, HeroStyled } from "./style-hero";

const Hero = ({ setModal }) => {
  // return (
  //   <HeroStyled>
  //     <HeroContainer className="content_area">
  //       <h1>Creativity starts with viewing the whole world differently</h1>
  //       <p>A service agency with customer satisfaction</p>
  //       <HeroImageContainer>
  //         <button
  //           className="button__style"
  //           type="button"
  //           onClick={() => {
  //             setModal(true);
  //           }}
  //         >
  //           Get Started
  //         </button>
  //       </HeroImageContainer>
  //     </HeroContainer>
  //     <HeroImageContainer>
  //       <img src={HeroImage} alt="heroImage" className="image__style" />
  //     </HeroImageContainer>
  //   </HeroStyled>
  // );
  return (
    <HeroStyled>
      <div className="element">
        <div>
          <h1 className="element__heading">
            Creativity starts with viewing the whole world differently
          </h1>
          <p className="element__subheading">
            A service agency with customer satisfaction
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
