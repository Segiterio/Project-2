import React from "react";
import { Highlight, HighlightContainer } from "./companyInfo-style";
import AnimatedNumbers from "react-animated-numbers";

const CompanyInfo = () => {
  return (
    <>
      <HighlightContainer>
       
          <Highlight>
            <h2 className="stats">
              <AnimatedNumbers
                fontStyle={{fontSize:36}}
                animateToNumber={100}
                configs={(number, index) => {
                  return { mass: 1, tension: 230 * (index + 1), friction: 140 };
                }}
              ></AnimatedNumbers>
              <span>K</span>
            </h2>
            <p className="title">Users</p>
          </Highlight>
          
          <Highlight>
            <h2 className="stats">
              24*7
            </h2>
            <p className="title">Support</p>
          </Highlight>
          
          <Highlight>
            <h2 className="stats">
              <AnimatedNumbers
               fontStyle={{fontSize:36}}
                animateToNumber={70}
                configs={(number, index) => {
                  return { mass: 1, tension: 230 * (index + 1), friction: 140 };
                }}
              ></AnimatedNumbers>
              <span>K</span>
            </h2>
            <p className="title">Rating</p>
          </Highlight>
          
          <Highlight>
            <h2 className="stats">
               Unlimited
            </h2>
            <p className="title">Happy faces</p>
          </Highlight>
      </HighlightContainer>
    </>
  );
};

export default CompanyInfo;
