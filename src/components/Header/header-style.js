import styled from "styled-components";

export const Top = styled.header`
  justify-content: space-between;
  padding: 0rem 0.6rem 0.5rem 0.6rem;
  font-size: 0.875rem;

  @media screen and (min-width: 769px) {
    padding: 0.5rem 1.5;
    font-size: 1rem;
    font-weight: 600;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  gap: 0.4rem;
  font-weight: 700;
  margin-left: 7px;
  & > img {
    width: 105px;
    height: 85px;
  }

  @media screen and (min-width: 769px) {
    font-size: 1rem;
    gap: 0.8rem;
    & > img {
      width: 150px;
      height: 100px;
    }
  }
`;

export const MenuContainer = styled.nav`
  display: none;
  @media screen and (min-width: 769px) {
    & {
      display: flex;
      align-items: center;
      margin-left: 3rem;
      gap: 40px;
      cursor: pointer;
    }

    & > *:hover {
      text-decoration: underline;
      text-underline-offset: 0.2rem;
      text-decoration-color: red;
    }
  }
  @media screen and (min-width: 1024px) {
    & {
      margin-left: 5rem;
    }
  }
`;

export const BookDemoBtn = styled.div`
  padding: 0.5rem 1rem;
  background: linear-gradient(to right, #1e90ff, #007bff);
  color: white;
  border-radius: 5px;
  font-weight: 600;
  transition: transform 150ms ease-in, box-shadow 150ms ease-in;
  cursor: pointer;
  font-family: "Arial", sans-serif;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  &:hover {
    transform: scale(0.95);
    background: linear-gradient(to right, #007bff, #1e90ff);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  }
  margin-right: 14px;
  @media (max-width: 920px) {
    margin-right: 6px;
  }
`;
