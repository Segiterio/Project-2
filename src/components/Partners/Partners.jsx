import React from "react";
import Dribble from "../../Assets/dribble.png";
import Google from "../../Assets/Google.png";
import Microsoft from "../../Assets/microsoft.png";
import Uber from "../../Assets/Uber.png";
import Paypal from "../../Assets/paypal.png";
import { LogoOfPartner, PartnersContainer,Wrapper } from "./partners-style";

const Partners = () => {
  return (
    <Wrapper>
      <h1>Our Partners</h1>
      <div className="content_area overflow-hidden mask">
        <PartnersContainer >
          <LogoOfPartner src={Uber} alt="" />
          <LogoOfPartner src={Google} alt="" />
          <LogoOfPartner src={Paypal} alt="" />
          <LogoOfPartner src={Microsoft} alt="" />
          <LogoOfPartner src={Dribble} alt="" />
          <LogoOfPartner src={Uber} alt="" />
          <LogoOfPartner src={Google} alt="" />
          <LogoOfPartner src={Paypal} alt="" />
          <LogoOfPartner src={Microsoft} alt="" />
          <LogoOfPartner src={Dribble} alt="" />
        </PartnersContainer>
      </div>
    </Wrapper>
  );
};

export default Partners;
