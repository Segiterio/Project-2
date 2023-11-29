import React from "react";
import BrandLogo from "../../Assets/brandlogo.png";
import { LogoContainer, MenuContainer, BookDemoBtn, Top } from "./header-style";
import { useContext } from "react";
import AppContextProvider, { AppContext } from "../../context/headerContext";
const Header = ({ setModal }) => {
  const { scrollId, setScrollId } = useContext(AppContext);
  return (
    <Top className="vertically_center">
      <div className="vertically_center">
        <LogoContainer>
          <img src={BrandLogo} alt="s1image" />
        </LogoContainer>
        <MenuContainer>
          <div onClick={() => setScrollId("hero-page")}>Home</div>
          <div onClick={() => setScrollId("why-choose")}>About us</div>
          <div onClick={() => setScrollId("courses")}>Courses</div>
          <div onClick={() => setScrollId("our-team")}>Success Stories</div>
        </MenuContainer>
      </div>

      <BookDemoBtn
        onClick={() => {
          setModal(true);
        }}
      >
        Book Demo
      </BookDemoBtn>
    </Top>
  );
};

export default Header;
