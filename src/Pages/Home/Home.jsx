import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import MainServices from "../../components/MainServices/index.jsx";
import OurTeam from "../../components/OurTeam/Team.jsx";
import Courses from "../../components/Courses/Index.jsx"
import WhyChooseUs from "../../components/WhyChooseUs/index.jsx";
import SubscribeUs from "../../components/SubscribeUs/SubscribeUs";
import Partners from "../../components/Partners/Partners.jsx";
import Modal from "../../components/Modal/Modal.jsx";
import CompanyInfo from "../../components/companyInfo/CompanyInfo.jsx";
import { AppContext } from "../../context/headerContext.js";
import Quote from "../../components/Quote/index.js";
const Home = () => {
  const [modal, setModal] = useState(false);
  const { scrollId, setScrollId } = useContext(AppContext);
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    scrollToSection(scrollId);
  }, [scrollId]);
  return (
    <>
      {/* <a onClick={() => scrollToSection("hero")}>Go to Hero Section</a>
      <a onClick={() => scrollToSection("main-services")}>
        Go to Main Services Section
      </a>
      <a onClick={() => scrollToSection("company-info")}>
        Go to Company Info Section
      </a> */}
      <h1></h1>
      {modal && <Modal setModal={setModal} />}
      <Header setModal={setModal} />
      <div id="hero-page">
        <Hero setModal={setModal} />
      </div>
      <div id="main-services">
        <MainServices />
      </div>
      <div id="company-info">
        <CompanyInfo />
      </div>
      <Quote/>
      <div id="our-team">
        <OurTeam />
      </div>
      <div id="partners">
        <Partners />
      </div>
      <div id="courses">
        <Courses />
      </div>
      <div id="why-choose">
        <WhyChooseUs />
      </div>
      <div id="contact-us">
        <SubscribeUs setModal={setModal} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
