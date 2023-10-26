import styled from "styled-components";

export const FooterLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & p {
    font-size: 1.25rem;
  }

  & > :first-child > img {
     width: 100px;
     height: 71px;
  }

  @media screen and (min-width: 769px){
    & > :first-child > img {
     width: 120px;
     height: 85px;
  }
  }
`;

export const Copyright = styled.div`
  color: #0f2137;
  opacity: 0.6;
`;

export const Privacy = styled.div`
  color: #0f2137;
`;

export const FooterTitle = styled.div`
  flex-grow: 1;
  font-size: 1rem;
  font-size: 900;
  font-family: "DM sans";
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #0f2137;
  white-space: nowrap;

  &:hover {
     text-decoration: underline;
     text-underline-offset:4px;
  }
`;

export const FooterLinksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-auto-flow: row;
  gap: .5rem;
  color: #0f2137;
`;

export const SocialLinks = styled.a`
  text-decoration: none;
  transition: scale 150ms ease-in-out;
  &:hover {
     scale:1.1
  }
  `
