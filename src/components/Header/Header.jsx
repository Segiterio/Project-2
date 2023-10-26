import React from "react";
// import Logo from "../../Assets/Logo.png";
import BrandLogo from "../../Assets/brandlogo.png"
import { LogoContainer, MenuContainer, BookDemoBtn } from "./header-style";
const Header = ({setModal}) => {
  return (
    <header className="content_area vertically_center">
      <div className="vertically_center">
        <LogoContainer>
          <img src={BrandLogo} alt="s1image"  />
        </LogoContainer>
        
      </div>
      <MenuContainer>
          <div>Home</div>
          <div>Advertise</div>
          <div>Supports</div>
          <div>About</div>
        </MenuContainer>
      <BookDemoBtn onClick={() => {
         setModal(true);
      }} >Book Demo</BookDemoBtn>
    </header>
  );
};

export default Header;
