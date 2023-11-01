import React from "react";
import Group from "../../Assets/decoration/Group.svg";
import Vector from "../../Assets/decoration/Vector.svg";
import Group_1 from "../../Assets/decoration/Group_1.svg";
import Group_2 from "../../Assets/decoration/Group_2.svg";
import Group_73 from "../../Assets/decoration/Group_73.svg";
import {
  Container,
  Strips1,
  Strips2,
  ContentContainer,
  Books,
  Ballons,
  Cactus,
  SubscribeBtn,
} from "./subscribeUs-style";

const SubscribeUs = ({ setModal }) => {
  return (
    <Container>
      <ContentContainer>
        <div>
          <h3 className="heading">Like our service? Book Demo</h3>
          <div className="para">
            We have more than thousand of creative entrepreneurs and stat
            joining our business
          </div>
        </div>
        <SubscribeBtn
          onClick={() => {
            setModal(true);
          }}
        >
          Book Your Demo
        </SubscribeBtn>
      </ContentContainer>

      <Books src={Group_73} alt="" className="books" />
      {/* <Strips1 src={Group_1} alt="" className="strips1" /> */}
      {/* <Cactus src={Group_2} alt="" className="cactus" /> */}
      {/* <Ballons src={Group} alt="" className="ballon" /> */}
      {/* <Strips2 src={Vector} alt="" className="strips2" /> */}
    </Container>
  );
};

export default SubscribeUs;
