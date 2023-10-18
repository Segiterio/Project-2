import React from 'react'
import Logo from "../../Assets/Logo.png"
import { FooterLogoContainer,Privacy,Copyright ,FooterTitle,FooterLinksContainer, SocialLinks} from './footer-style'

const Footer = () => {
  return (
    <footer className="content_area">
        <FooterLogoContainer className="footer_logo_contaniner">
          <div className="vertically_center logo_container">
            <img src={Logo} alt="" />
            <p>StartupLanding</p>
          </div>
          <Privacy>Terms of use | Privacy</Privacy>
          <Copyright >Copyright by 2019 YourName, Inc</Copyright>
        </FooterLogoContainer>
        <div>
          <FooterTitle >About Us</FooterTitle>
          <FooterLinksContainer>
            <div>Support Center</div>
            <div>Customer Support</div>
            <div>About Us</div>
            <div>Copyright</div>
          </FooterLinksContainer>
        </div>
        <div>
          <FooterTitle >Our Information</FooterTitle>
          <FooterLinksContainer >
            <div>Return Poacy</div>
            <div>Privacy Poacy</div>
            <div>Terms & conditions</div>
            <div>Site Map</div>
          </FooterLinksContainer>
        </div>
        <div>
          <FooterTitle>My Account</FooterTitle>
          <FooterLinksContainer >
            <div>Press inquiries</div>
            <div>Social media</div>
            <div>directories</div>
            <div>Images & B-roll</div>
          </FooterLinksContainer>
        </div>
        <div>
          <FooterTitle >Connect</FooterTitle>
          <FooterLinksContainer>
            <SocialLinks className="social_links">
              <img src="" alt="" />
              <p>Facebook</p>
            </SocialLinks>
            <SocialLinks className="social_links">
              <img src="" alt="" />
              <p>Twitter</p>
            </SocialLinks>
            <SocialLinks className="social_links">
              <img src="" alt="" />
              <p>Github</p>
            </SocialLinks>
            <SocialLinks className="social_links">
              <img src="" alt="" />
              <p>Dribbble</p>
            </SocialLinks>
          </FooterLinksContainer>
        </div>
      </footer>
  )
}

export default Footer