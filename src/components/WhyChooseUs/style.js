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
  padding: 0.4rem 0.8rem;
  cursor: pointer;
  border-bottom: 4px solid ${({ $active }) => ($active ? "#1e90ff" : "white")};
 transition: border-bottom 150ms ease-in-out;
  &:hover {
     border-bottom:4px solid ${({ $active }) => ($active ? "null" : "red")};
  }
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
