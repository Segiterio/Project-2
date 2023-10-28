import React, { useEffect, useRef, useState } from "react";
import ServiceCard from "../Templates/ServiceCard";
import Printer from "../../Assets/printer.png";
import InfinityIcon from "../../Assets/infinity.png";
import Meter from "../../Assets/meter.png";
import {
  QuoteContainer,
  Writer,
  Quote,
  CardsContainer,
  MainServicesContainer,
} from "./index-style";
import AOS from "aos";
import "aos/dist/aos.css";
const Index = () => {
  const componentRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated === false) {
      const refreshAnimation = () => {
        AOS.init({
          offset: 100, // Adjust this value as needed
        });
        AOS.refresh();
        setHasAnimated(true);
      };
      let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            refreshAnimation();
            observer.unobserve(entry.target);
          }
        });
      });
      if (componentRef.current) {
        observer.observe(componentRef.current);
      }

      return () => {
        if (componentRef.current && observer) {
          observer.unobserve(componentRef.current);
        }
      };
    }
  }, []);
  return (
    <MainServicesContainer
      className="services_customer_container"
      ref={componentRef}
    >
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
          <div className="item" data-aos="fade-right">
            <ServiceCard
              Image={Meter}
              title={"Marketing & advertising"}
              para={
                "Get your info tests delivered at home collect a sample from the your pogress tests."
              }
            />
          </div>
          <div data-aos="fade-down">
            <ServiceCard
              Image={InfinityIcon}
              title={"Ultimate development"}
              para={
                "Get your info tests delivered at home collect a sample from the your pogress tests."
              }
              data-aos="fade-up"
            />
          </div>
          <div className="item" data-aos="fade-left">
            <ServiceCard
              Image={Printer}
              title={"Business Enterprise"}
              para={
                "Get your info tests delivered at home collect a sample from the your pogress tests."
              }
              data-aos="fade-right"
            />
          </div>
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
      {/* <Partners /> */}
    </MainServicesContainer>
  );
};

export default Index;
