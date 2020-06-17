import React from "react";
import { MainDiv, Title, Subtitle, ArrowIcon, SecondaryDiv } from "./HeroStyles";
import { StyledButtonHome } from "../home-button/ButtonStyles";

const Hero = () => {
  return (
    <MainDiv>
      <SecondaryDiv><Title>Bring more life home</Title>
      <Subtitle>Buy a new plant today</Subtitle>
      <StyledButtonHome to='/plants-accessories' >
        Shop now
      </StyledButtonHome>
      </SecondaryDiv>

     <ArrowIcon to="mission" duration={1000} smooth/>
    </MainDiv>
  )
}

export default Hero;
