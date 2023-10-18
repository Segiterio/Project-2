import React from 'react'
import HeroImage from "../../Assets/Hero.svg"
import { HeroContainer,HeroImageContainer } from './style-hero'

const Hero = () => {
  return (
    <HeroContainer className="content_area">
    <h1 className="">
      Creativity starts with viewing the whole world differently
    </h1>
    <p>A service agency with customer satisfaction</p>

    <HeroImageContainer className="heroImage_container">
      <img src={HeroImage} width="100%" alt="heroImage" />
      <button type="button">Get Started</button>
    </HeroImageContainer>
  </HeroContainer>
  )
}

export default Hero