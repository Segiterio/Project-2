import React from "react";
import Logo from "../../Assets/Logo.png";
import {
  FooterLogoContainer,
  Privacy,
  Copyright,
  FooterTitle,
  SocialLinks,
  FooterLinksContainer
} from "./footer-style";

import {AiFillGithub,AiFillFacebook,AiFillTwitterCircle,AiFillDribbbleCircle} from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="content_area">
      <FooterLogoContainer className="footer_logo_contaniner">
        <div className="vertically_center logo_container">
          <img src={Logo} alt="" />
          <p>StartupLanding</p>
        </div>
        <Privacy>Terms of use | Privacy</Privacy>
        <Copyright>Copyright by 2019 YourName, Inc</Copyright>
      </FooterLogoContainer>
      <div>
        <FooterTitle>Home</FooterTitle>
        <FooterTitle>Adverties</FooterTitle>
        <FooterTitle>Supports</FooterTitle>
        <FooterTitle>About</FooterTitle>
      </div>

      <div>
        <FooterLinksContainer>
          <SocialLinks className="social_links" href="https://www.facebook.com" target="_blank">
            <AiFillFacebook color="#0000FF" size={30} />
            <p>Facebook</p>
          </SocialLinks>
          <SocialLinks className="social_links">
           <AiFillTwitterCircle size={30} color="#26a7de"/>
            <p>Twitter</p>
          </SocialLinks>
          <SocialLinks className="social_links" href="https://www.github.com" target="_blank">
           <AiFillGithub size={30} color="#2b3137"/>
            <p>Github</p>
          </SocialLinks>
          <SocialLinks className="social_links" href="https://www.dribbble.com" target="_blank" >
           <AiFillDribbbleCircle size={30} color="#ea4c89"/>
            <p>Dribbble</p>
          </SocialLinks>
        </FooterLinksContainer>
      </div>
    </footer>
  );
};

export default Footer;
