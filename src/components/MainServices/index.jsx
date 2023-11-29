import React, { useEffect, useRef, useState } from "react";
import Printer from "../../Assets/printer.png";
import InfinityIcon from "../../Assets/infinity.png";
import Meter from "../../Assets/meter.png";
import {
  QuoteContainer,
  Writer,
  Quote,
  CardsContainer,
  MainServicesContainer,
  Title,
  SubHeading,
  MainServiceCard 
} from "./index-style";
import AOS from "aos";
import "aos/dist/aos.css";

export const Card = ({ Image, title, para }) => {
  return (
    <MainServiceCard>
      <img src={Image} alt="meter" />
      <div className="card_details">
        <h3>{title}</h3>
        <p>{para}</p>
      </div>
    </MainServiceCard>
  );
};

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
          <Title color={"white"}>What We Do</Title>
          <SubHeading color={"white"}>
          Build an incredible skill and be part of the future workforce.
          </SubHeading>
        </div>
        <CardsContainer>
          <div className="item" data-aos="fade-right">
            <Card
              Image={Meter}
              title={"Technology Training"}
              para={
                "The rate of technological change is swift. We provide technology training in the areas of Devops, AI, Cloud, CRM, Cyber Security, Data Analytics, Programming Languages which provide positive learning outcomes for the UG/PG Students of Colleges."
              }
            />
          </div>
          <div data-aos="fade-down">
            <Card
              Image={InfinityIcon}
              title={"Soft Skills Training"}
              para={
                "We provide Soft Skills training on Communication, Creativity, Critical Thinking, Goal Setting, Leadership, Multitasking, Problem Solving, Stress Management, Personality Development, Group Discussion Prep and Interview Preparation to prepare the students for their dream job."
              }
              data-aos="fade-up"
            />
          </div>
          <div className="item" data-aos="fade-left">
            <Card
              Image={Printer}
              title={"Assessment and Certification"}
              para={
                "Certification provides the candidate and the recruiter an assured standard of proficiency. On successful completion of the training the candidate will provided with assessment and certification. Our certifications are recognized by the employers and demonstrate the proficiency of the candidate."
              }
              data-aos="fade-right"
            />
          </div>
        </CardsContainer>
      </div>

    </MainServicesContainer>
  );
};

export default Index;
