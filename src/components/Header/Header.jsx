import React from "react";
import Logo from "../../Assets/Logo.png";
import Path_49 from "../../Assets/Path_49.svg";
import {
  LogoContainer,
  MenuContainer,
  GetStaredBtn,
  LoginBtn,
} from "./header-style";
const Header = () => {
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
      <div className="vertically_center">
        <LoginBtn>Login</LoginBtn>
        <GetStaredBtn>
          <button>Get Started</button>
          {/* <img src={Path_49} alt="underline" /> */}
        </GetStaredBtn>
      </div>
    </header>
  );
};

export default Header;
