import React from "react";
import Group from "../../Assets/decoration/Group.svg";
import Vector from "../../Assets/decoration/Vector.svg";
import Group_1 from "../../Assets/decoration/Group_1.svg";
import Group_2 from "../../Assets/decoration/Group_2.svg";
import Group_73 from "../../Assets/decoration/Group_73.svg";

const SubscribeUs = () => {
  return (
    <div className="decoration">
      <div className="content_area news_letter_section">
        <div>
          <h3 className="heading">Like our service? Subscribe us</h3>
          <div className="para">
            We have more than thousand of creative entrepreneurs and stat
            joining our business
          </div>
        </div>
        <div>
          <form action="">
            <div className="field_container">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email Address"
              />

              <button className="subscribe_btn">Subscribe</button>
            </div>
            <div className="vertically_center">
              <input
                type="checkbox"
                name="additional_messages"
                id="additional_messages"
              />
              <label for="additional_messages">
                Don't provide any promotional message.
              </label>
            </div>
          </form>
        </div>
      </div>

      <img src={Group_73} alt="" className="books" />
      <img src={Group_1} alt="" className="strips1" />
      <img src={Group_2} alt="" className="cactus" />
      <img src={Group} alt="" className="ballon" />
      <img src={Vector} alt="" className="strips2" />
    </div>
  );
};

export default SubscribeUs;
