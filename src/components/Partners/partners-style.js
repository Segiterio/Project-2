import { keyframes } from "styled-components";
import styled from "styled-components";

export const  Wrapper = styled.div`
  margin:5rem 0;
`  

export const scroll_horizontal = keyframes`
   100% {
     transform:translate(calc(-50% - 2.5rem));
   }
`;

export const PartnersContainer = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 5rem;
  z-index: 50;
  position: relative;
  justify-content: center;
  animation: ${scroll_horizontal} 10s linear infinite;
  width: max-content;
`;

export const LogoOfPartner = styled.img`
  display: inline-block;
`;
