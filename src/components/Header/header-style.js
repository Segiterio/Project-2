import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  gap: 0.4rem;
  font-weight: 700;
`;

export const MenuContainer = styled.nav`
  display: none;
  @media screen and (min-width: 769px) {
    & {
      display: flex;
      align-items: center;
      margin-left: 1.7rem;
      gap: min(1.5rem, 2vw);
      cursor: pointer;
    }

    & > *:hover {
         text-decoration: underline;
         text-underline-offset: .2rem;
    }
  }
`;

export const GetStaredBtn = styled.div`
  margin-left: 0.5rem;
  font-size: 0.8rem;
  color: var(--Green_gray);
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  & > img {
    width: 100%;
    position: absolute;
    bottom: -0.4rem;
  }
`;

export const LoginBtn = styled.button`
    border:none;
    background-color: transparent;
    font-weight: 500;
    font-size: .8rem;
`;
