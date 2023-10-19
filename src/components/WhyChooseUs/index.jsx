import React, { useState } from "react";
import ExplainModal from "../../Assets/ExplainModal.svg";
import Check from "../../Assets/check.png";
import Image2 from "../../Assets/blogImage/image2.png"
import Image1 from "../../Assets/blogImage/image1.png"

import {
  Title,
  TitlesContainer,
  ExplanationContainer,
  Explanation,
  Points,
  ExplainHeading,
  ExploreBtn
} from "./style";

const Index = () => {
  const [currentActiveTitle, setCurrentActiveTitle] = useState(1);
  return (
    <div className="content_area">
      <TitlesContainer>
        <Title
          $active={currentActiveTitle === 1 ? true : false}
          onClick={() => {
            if (currentActiveTitle === 1);
            else setCurrentActiveTitle(1);
          }}
        >
          Why you choose our service?
        </Title>
        <Title
          $active={currentActiveTitle === 2 ? true : false}
          onClick={() => {
            if (currentActiveTitle === 2);
            else setCurrentActiveTitle(2);
          }}
        >
          What's our business promise?
        </Title>
        <Title
          $active={currentActiveTitle === 3 ? true : false}
          onClick={() => {
            if (currentActiveTitle === 3);
            else setCurrentActiveTitle(3);
          }}
        >
          What's our role model plan?
        </Title>
      </TitlesContainer>
      { currentActiveTitle === 1 ? <ExplanationContainer>
        <Explanation>
          <ExplainHeading>
            We will turn your idea in the successful business model framework
          </ExplainHeading>
          <p>
            Get your tests delivered at let home collect sample from the victory
            of the managments that supplies best design system guidelines ever.
          </p>

          <Points className="points">
            <div>
              <img src={Check} alt="" />
              <p>Medical and vision</p>
            </div>
            <div>
              <img src={Check} alt="" />
              <p>HSAs and FSAs</p>
            </div>
            <div>
              <img src={Check} alt="" />
              <p>Life insurance</p>
            </div>
            <div>
              <img src={Check} alt="" />
              <p>Commuter benefits</p>
            </div>
          </Points>

          <ExploreBtn>Explore more</ExploreBtn>
        </Explanation>
        <div className="explain_image">
          <img src={ExplainModal} width="100%" alt="" />
        </div>
      </ExplanationContainer> : null}
      { currentActiveTitle === 2 ? <ExplanationContainer>
        <Explanation>
          <ExplainHeading>
            We will turn your idea in the successful business model framework
          </ExplainHeading>
          <p>
            Get your tests delivered at let home collect sample from the victory
            of the managments that supplies best design system guidelines ever.
          </p>

          <Points className="points">
            <div>
              <img src={Check} alt="" />
              <p>Medical and vision</p>
            </div>
            <div>
              <img src={Check} alt="" />
              <p>HSAs and FSAs</p>
            </div>
            <div>
              <img src={Check} alt="" />
              <p>Life insurance</p>
            </div>
            <div>
              <img src={Check} alt="" />
              <p>Commuter benefits</p>
            </div>
          </Points>

          <ExploreBtn>Explore more</ExploreBtn>
        </Explanation>
        <div className="explain_image">
          <img src={Image1} width="100%" alt="" />
        </div>
      </ExplanationContainer> : null}
      { currentActiveTitle === 3 ? <ExplanationContainer>
        <Explanation>
          <ExplainHeading>
            We will turn your idea in the successful business model framework
          </ExplainHeading>
          <p>
            Get your tests delivered at let home collect sample from the victory
            of the managments that supplies best design system guidelines ever.
          </p>

          <Points className="points">
            <div>
              <img src={Check} alt="" />
              <p>Medical and vision</p>
            </div>
            <div>
              <img src={Check} alt="" />
              <p>HSAs and FSAs</p>
            </div>
            <div>
              <img src={Check} alt="" />
              <p>Life insurance</p>
            </div>
            <div>
              <img src={Check} alt="" />
              <p>Commuter benefits</p>
            </div>
          </Points>

          <ExploreBtn>Explore more</ExploreBtn>
        </Explanation>
        <div className="explain_image">
          <img src={Image2} width="100%" alt="" />
        </div>
      </ExplanationContainer> : null}
    </div>
  );
};

export default Index;
