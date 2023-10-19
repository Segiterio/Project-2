import styled from "styled-components";

export const FooterLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & p {
    font-size: 1.25rem;
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
  font-size: 1.25rem;
  font-size: 900;
  font-family: "DM sans";
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #0f2137;
  white-space: nowrap;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  white-space: nowrap;
  color: #0f2137;
  opacity: 0.8;
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 0.4rem;
`;
