import React from 'react'
import ExplainModal from "../../Assets/ExplainModal.svg";
import Check from "../../Assets/check.png";

const index = () => {
  return (
    <div className="content_area">
    <div className="explain_titles">
      <div className="active_explain_titles">Why you choose our service?</div>
      <div className="hover_explain_titles">What's our business promise?</div>
      <div className="hover_explain_titles">What's our role model plan?</div>
    </div>
    <div className="explain_container">
      <div className="explain_content">
        <h3 className="explain_heading">
          We will turn your idea in the successful business model framework
        </h3>
        <p>
          Get your tests delivered at let home collect sample from the
          victory of the managments that supplies best design system
          guidelines ever.
        </p>

        <div className="points">
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
        </div>

        <button>Explore more</button>
      </div>
      <div className="explain_image">
        <img src={ExplainModal} width="100%" alt="" />
      </div>
    </div>
  </div>

  )
}

export default index