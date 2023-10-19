import React from "react";
import { LearnBtn,Card,ServiceTitle } from "./serviceCard-style";

const ServiceCard = ({ Image, title, para, isContentLarge }) => {
  return (
    <Card>
      <img src={Image} alt="meter" />
      <div className="card_details">
        <ServiceTitle className="services_title">{title}</ServiceTitle>
        <p>{para}</p>
        {isContentLarge && <LearnBtn>Learn more</LearnBtn>}
      </div>
    </Card>
  );
};

export default ServiceCard;
