import React from "react";
import Dribble from "../../../Assets/dribble.png";
import Google from "../../../Assets/Google.png";
import Microsoft from "../../../Assets/microsoft.png";
import Uber from "../../../Assets/Uber.png";
import Paypal from "../../../Assets/paypal.png";
import { LogoOfPartner,PartnersContainer } from "./partners-style";

const Partners = () => {
  return (
    <PartnersContainer className="content_area">
      <LogoOfPartner src={Uber} alt="" />
      <LogoOfPartner src={Google} alt="" />
      <LogoOfPartner src={Paypal} alt="" />
      <LogoOfPartner src={Microsoft} alt="" />
      <LogoOfPartner src={Dribble} alt="" />
    </PartnersContainer>
  );
};

export default Partners;
