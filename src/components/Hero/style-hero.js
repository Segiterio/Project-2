import styled from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  padding: 2rem 0;
  z-index: 5;
  position: relative;

  & > p {
    text-align: center;
  }

  @media screen and (min-width: 769px) {
     padding:4rem 0;
  }
`;

export const HeroImageContainer = styled.div`
  &,
  & > img {
    position: relative;
  }

  & > button {
    padding: 0.8rem 2rem;
    background-color: var(--Green_gray);
    color: white;
    border-radius: 5px;
    font-size: 0.875rem;
    font-weight: 700;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    white-space: nowrap;
    border: none;
  }

  @media screen and (min-width: 769px) {
    & > button {
      font-size: 1.125rem;
    }
  }
`;
