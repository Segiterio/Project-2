import React from "react";
import { LearnBtn } from "./serviceCard-style";

const ServiceCard = ({ Image, title, para, isContentLarge }) => {
  return (
    <div className="card">
      <img src={Image} alt="meter" />
      <div className="card_details">
        <div className="services_title">{title}</div>
        <p>{para}</p>
        {isContentLarge && <LearnBtn>Learn more</LearnBtn>}
      </div>
    </div>
  );
};

export default ServiceCard;
