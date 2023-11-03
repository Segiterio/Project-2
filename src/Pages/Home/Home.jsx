import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header.jsx";
import { Router, Route } from "react-router-dom";
import Hero from "../../components/Hero/Hero.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import MainServices from "../../components/MainServices/index.jsx";
import OurTeam from "../../components/OurTeam/Team.jsx";
import OtherServices from "../../components/OtherServices/Index.jsx";
import WhyChooseUs from "../../components/WhyChooseUs/index.jsx";
// import Blogs from "../../components/Blogs/Blogs.jsx";
import SubscribeUs from "../../components/SubscribeUs/SubscribeUs";
import Partners from "../../components/Partners/Partners.jsx";
import Modal from "../../components/Modal/Modal.jsx";
import CompanyInfo from "../../components/companyInfo/CompanyInfo.jsx";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/headerContext.js";
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
      <div id="our-team">
        <OurTeam />
      </div>
      <div id="partners">
        <Partners />
      </div>
      <div id="other-services">
        <OtherServices />
      </div>
      <div id="why-choose">
        <WhyChooseUs />
      </div>
      {/* <Blogs /> */}
      <div id="contact-us">
        <SubscribeUs setModal={setModal} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
