import React from "react";
import { Highlight, HighlightContainer } from "./companyInfo-style";

const CompanyInfo = () => {
  return (
    <>
      <HighlightContainer>
       
          <Highlight>
            <h2 className="stats">
               100k
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
              70k
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
