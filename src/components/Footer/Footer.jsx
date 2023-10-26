import React from "react";
import BrandLogo from "../../Assets/brandlogo.png";
import {
  FooterLogoContainer,
  Privacy,
  Copyright,
  FooterTitle,
  SocialLinks,
  FooterLinksContainer,
} from "./footer-style";

import {
  AiFillFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";

import {FaLinkedin,FaInstagram} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="content_area">
      <FooterLogoContainer>
        <div className="vertically_center ">
          <img src={BrandLogo} alt="brandLogo" />
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
          <SocialLinks href="https://www.facebook.com" target="_blank">
            <AiFillFacebook color="#316FF6" size={40} />
          </SocialLinks>
          <SocialLinks href="https://www.twitter.com" target="_blank">
            <AiFillTwitterCircle size={40} color="#26a7de" />
          </SocialLinks>
          <SocialLinks href="https://www.github.com" target="_blank">
            <FaInstagram size={40} color="#d62976" />
          </SocialLinks>
          <SocialLinks href="https://www.linkedin.com" target="_blank">
            <FaLinkedin size={40} color="#0077b5" />
          </SocialLinks>
        </FooterLinksContainer>
      </div>
    </footer>
  );
};

export default Footer;
