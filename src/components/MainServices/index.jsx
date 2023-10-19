import React from "react";
import ServiceCard from "../Templates/ServiceCard";
import Printer from "../../Assets/printer.png";
import InfinityIcon from "../../Assets/infinity.png";
import Meter from "../../Assets/meter.png";
import Partners from "./Partners/Partners";
import { QuoteContainer, Writer, Quote, CardsContainer,MainServicesContainer } from "./index-style";

const index = () => {
  return (
    <MainServicesContainer className="services_customer_container">
      {/* <!-- services --> */}
      <div className="content_area">
        <div>
          <h2>Grow your startup with our Service</h2>
          <p>
            Build an incredible workplace and grow your business with Gusto's
            all-in-one platform with amazing contents.
          </p>
        </div>
        <CardsContainer>
          <ServiceCard
            Image={Meter}
            title={"Marketing & advertising"}
            para={
              "Get your info tests delivered at home collect a sample from the your pogress tests."
            }
          />
          <ServiceCard
            Image={InfinityIcon}
            title={"Ultimate development"}
            para={
              "Get your info tests delivered at home collect a sample from the your pogress tests."
            }
          />
          <ServiceCard
            Image={Printer}
            title={"Business Enterprise"}
            para={
              "Get your info tests delivered at home collect a sample from the your pogress tests."
            }
          />
        </CardsContainer>
      </div>
      {/* <!-- quote container --> */}
      <QuoteContainer className="content_area">
        <div>
          <Quote>
            “Whatever we create in Qwilr looks absolutely brilliant. It helps
            show our work in the best light, and is downright impressive when
            clients see a Qwilr Page we have made for them.”
          </Quote>
          <Writer className="writer">By Denny Albuz, Adviser of Paypal</Writer>
        </div>
      </QuoteContainer>
      {/* <!-- logos container --> */}
      <Partners />
    </MainServicesContainer>
  );
};

export default index;
