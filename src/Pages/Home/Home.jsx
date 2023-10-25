import React,{useState} from "react";
import Header from "../../components/Header/Header.jsx";
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

const Home = () => {
  const [modal,setModal] = useState(false);
  return (
    <>
      {modal && <Modal setModal={setModal} />}
      <Header setModal={setModal} />
      <Hero setModal={setModal} />
      <MainServices />
      <CompanyInfo />
      <OurTeam />
      <Partners />
      <OtherServices />
      <WhyChooseUs />
      {/* <Blogs /> */}
      <SubscribeUs setModal={setModal} />
      <Footer />
      
    </>
  );
};

export default Home;
