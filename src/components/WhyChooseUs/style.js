import styled from "styled-components";

export const TitlesContainer = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  white-space: nowrap;

  @media screen and (min-width: 769px) {
    padding: 2.5rem 0;
  }
`;

export const Title = styled.div`
  border-radius: 20px;
  box-shadow: 1px 2px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 0.4rem 0.8rem;
  cursor: pointer;
  color: ${({ $active }) => ($active ? "white" : "black")};
  background-color: ${({ $active }) => ($active ? "#1e90ff" : "white")};
`;

export const ExplanationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 2rem;
  gap: 2.5rem;

  @media screen and (min-width: 769px) {
    flex-direction: row;
    align-items: center;

    & > div {
      width: 50%;
    }
  }
`;

export const Explanation = styled.div`
  & > p {
    font-size: 1.11rem;
    padding-top: 1rem;
  }
`;

export const Points = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  padding: 1rem 0;

  & div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const ExplainHeading = styled.h3`
  font-size: 1.4rem;
  @media screen and (min-width: 769px) {
    font-size: 1.8rem;
    text-align: start;
  }
`;

export const ExploreBtn = styled.button`
  border: none;
  background-color: transparent;
  color: #3183ff;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
