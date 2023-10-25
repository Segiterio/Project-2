import React from "react";
import Logo from "../../Assets/Logo.png";
import { LogoContainer, MenuContainer, BookDemoBtn } from "./header-style";
const Header = ({setModal}) => {
  return (
    <header className="content_area vertically_center">
      <div className="vertically_center">
        <LogoContainer>
          <img src={Logo} alt="s1image" />
          <p>StartupLanding</p>
        </LogoContainer>
        <MenuContainer>
          <div>Home</div>
          <div>Advertise</div>
          <div>Supports</div>
          <div>About</div>
        </MenuContainer>
      </div>
      {/* <div className="vertically_center">
        <LoginBtn>Login</LoginBtn>
        <GetStaredBtn>
          <button>Get Started</button>
        </GetStaredBtn>
      </div> */}
      <BookDemoBtn onClick={() => {
         setModal(true);
      }} >Book Demo</BookDemoBtn>
    </header>
  );
};

export default Header;
