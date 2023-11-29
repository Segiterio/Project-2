import React from "react";
import { QuoteContainer,QuoteContent } from "./indes-style";
import Ballon from "../../Assets/decoration/Group.svg"
const Quote = () => {
  return (
    <QuoteContainer >
       <img src={Ballon} style={{transform:"rotateY(180deg)"}} alt="ballon" />
      <QuoteContent>
        “Our mission is to deliver innovative, value-driven, and flexible
        training solutions, skills and knowledge that is aligned to the
        employment opportunities in the industry, thereby enhancing their
        contributions to the goals of the nation.”
      </QuoteContent>
      <img src={Ballon} alt="ballon" />
    </QuoteContainer>
  );
};

export default Quote;
