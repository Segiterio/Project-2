import React from "react";
import The_National_Institute_of_Engineering from "../../Assets/Partners/The_National_Institute_of_Engineering_logo-removebg-preview.png";
import KLE_S_Nijalingappa_College from "../../Assets/Partners/KLE_logo-removebg-preview.png";
import Bapuji_Institute_Of_Engineering_And_Technology from "../../Assets/Partners/BIET_logo-removebg-preview.png";
import KLE_Societys_RLS_Institute from "../../Assets/Partners/KLE_RSL-removebg-preview.png";
import Malnad_College_of_Engineering from "../../Assets/Partners/MCE-removebg-preview.png";
import Sharnbasva_University from "../../Assets/Partners/Sharnbasva_University_logo-removebg-preview.png";
import { LogoOfPartner, PartnersContainer, Wrapper } from "./partners-style";
import { Title } from "../MainServices/index-style";
const Partners = () => {
  return (
    <Wrapper>
      <Title>Our Partners</Title>
      <div className="content_area overflow-hidden mask">
        <PartnersContainer>
          <LogoOfPartner src={The_National_Institute_of_Engineering} alt="" />
          <LogoOfPartner src={KLE_S_Nijalingappa_College} alt="" />
          <LogoOfPartner
            src={Bapuji_Institute_Of_Engineering_And_Technology}
            alt=""
          />

          <LogoOfPartner src={Malnad_College_of_Engineering} alt="" />
          <LogoOfPartner src={Sharnbasva_University} alt="" />
          <LogoOfPartner src={The_National_Institute_of_Engineering} alt="" />
          <LogoOfPartner src={KLE_S_Nijalingappa_College} alt="" />
          <LogoOfPartner
            src={Bapuji_Institute_Of_Engineering_And_Technology}
            alt=""
          />
          <LogoOfPartner src={Malnad_College_of_Engineering} alt="" />
          <LogoOfPartner src={Sharnbasva_University} alt="" />
        </PartnersContainer>
      </div>
    </Wrapper>
  );
};

export default Partners;
