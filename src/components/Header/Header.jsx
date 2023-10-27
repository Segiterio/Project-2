import React from "react";
// import Logo from "../../Assets/Logo.png";
import BrandLogo from "../../Assets/brandlogo.png"
import { LogoContainer, MenuContainer, BookDemoBtn,Top } from "./header-style";
const Header = ({setModal}) => {
  return (
    <Top className="vertically_center">
      <div className="vertically_center">
        <LogoContainer>
          <img src={BrandLogo} alt="s1image"  />
        </LogoContainer>
        <MenuContainer>
          <div>Home</div>
          <div>Advertise</div>
          <div>Supports</div>
          <div>About</div>
        </MenuContainer>
      </div>
     
      <BookDemoBtn onClick={() => {
         setModal(true);
      }} >Book Demo</BookDemoBtn>
    </Top>
  );
};

export default Header;
