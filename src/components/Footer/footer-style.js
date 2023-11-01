import styled from "styled-components";
export const FooterStyle = styled.div`
  margin-top: 20px;
  @media (max-width: 920px) {
    margin-top: 0px;
  }
`;
export const FooterLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & p {
    font-size: 1.25rem;
  }

  & > :first-child > img {
    width: 120px;
    height: 85px;
  }

  @media screen and (min-width: 769px) {
    & > :first-child > img {
      width: 160px;
      height: 110px;
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
  font-weight: 700;
  font-family: "DM sans";
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #0f2137;
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-color: red;
    cursor: pointer;
  }
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  color: #0f2137;
  margin-right: 15px;
`;

export const SocialLinks = styled.a`
  text-decoration: none;
  transition: scale 150ms ease-in-out;
  color: black;
  &:hover {
    scale: 1.1;
  }
`;
