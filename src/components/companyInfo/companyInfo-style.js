import styled from "styled-components";

export const HighlightContainer = styled.div`
  display: grid;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
  place-items: center;
  grid-template-columns: repeat(2,1fr);
  grid-template-rows: repeat(2,1fr);
  gap:2rem;
  width: 90%;

  @media screen and (min-width:769px){
     grid-template-columns: repeat(4,1fr);
     grid-template-rows: none;
  }
`;

export const Highlight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .stats {
    font-size: 36px;
    font-weight: 700;
    display: flex;
    gap:.2rem;
    align-items: center;
    color: #ff6666;
  }
  .title {
    font-weight: 700;
    font-size: 16px;
    color: black;

  }
  & > p {
    font-size: 1rem;
    color: gray;
  }

  @media screen and (min-width: 600px) {
    & > h2 {
      font-size: 1.5rem;
    }
    & > p {
      font-size: 0.5rem;
    }
  }
`;
