import styled from "styled-components";

export const MainServicesContainer = styled.div`
  background-color: #1e90ff;
  display: flex;
  padding: 2.5rem 0;
  flex-direction: column;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: row;
  gap: 2.5rem;
  margin-top: 2.5rem;

  @media screen and (min-width: 769px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
  }
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  font-family: "Montserrat", sans-serif;
  color: ${({ color }) => (color ? color : "black")};
`;

export const SubHeading = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 1.4rem;
  color: ${({ color }) => (color ? color : "black")};
`;

export const MainServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  & > img {
    width: 100px;
    height: 100px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    & > h3 {
      font-size: 1.25rem;
      color: #f8f6f4;
    }

    & > p {
      text-align: justify;
      color: #f8f6f4;
    }
  }
`;
