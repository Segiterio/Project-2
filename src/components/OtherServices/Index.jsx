import React from "react";
import Meter from "../../Assets/meter.png";
import InfinityIcon from "../../Assets/infinity.png";
import Layer from "../../Assets/layer.png";
import Lego from "../../Assets/lego.png";
import Link from "../../Assets/link.png";
import Vertical_bars from "../../Assets/vertical_bars.png";
import ServiceCard from "../Templates/ServiceCard";
import { OtherServicesContainer,FeaturesContainer } from "./Index-style";

const Index = () => {
  return (
    <OtherServicesContainer>
      <div className="content_area">
        <div>
          <h2>Other sevices you must appreciate</h2>
          <p className="feature_para">
            Focus only on the meaning, we take care of the design. As soon as
            the meeting end you can export in one click into your preferred.
          </p>
        </div>

        <FeaturesContainer >
          <ServiceCard
            Image={Layer}
            title={"3D modeling & art"}
            para={
              " Get your info tests delivered at home collect a sample from the your pogress tests."
            }
            isContentLarge={true}
          />
          <ServiceCard
            Image={Link}
            title={"Digital promotion"}
            para={
              "Get your info tests delivered at home collect a sample from the your pogress tests."
            }
            isContentLarge={true}
          />
          <ServiceCard
            Image={Lego}
            title={"Business Enterprise"}
            para={
              "Get your info tests delivered at home collect a sample from the your pogress tests."
            }
            isContentLarge={true}
          />
          <ServiceCard
            Image={Meter}
            title={"Marketing & advertising"}
            para={
              "Get your info tests delivered at home collect a sample from the your pogress tests."
            }
            isContentLarge={true}
          />
          <ServiceCard
            Image={InfinityIcon}
            title={"Ultimate development"}
            para={
              "Get your info tests delivered at home collect a sample from the your pogress tests."
            }
            isContentLarge={true}
          />
          <ServiceCard
            Image={Vertical_bars}
            title={"Online support"}
            para={
              "Get your info tests delivered at home collect a sample from the your pogress tests."
            }
            isContentLarge={true}
          />
        </FeaturesContainer>
      </div>
    </OtherServicesContainer>
  );
};

export default Index;
