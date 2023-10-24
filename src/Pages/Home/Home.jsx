import React from "react";
import Header from "../../components/Header/Header.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import MainServices from "../../components/MainServices/index.jsx";
import OurTeam from "../../components/OurTeam/Team.jsx";
import OtherServices from "../../components/OtherServices/Index.jsx";
import WhyChooseUs from "../../components/WhyChooseUs/index.jsx";
import Blogs from "../../components/Blogs/Blogs.jsx";
import SubscribeUs from "../../components/SubscribeUs/SubscribeUs";
import Partners from "../../components/MainServices/Partners/Partners.jsx";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <MainServices />
      <Partners />
      <OurTeam />
      <OtherServices />
      <WhyChooseUs />
      <Blogs />
      <SubscribeUs />
      <Footer />
    </>
  );
};

export default Home;
