import styled from "styled-components";

export const HighlightContainer = styled.div`
  display: grid;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2.5rem 0;
  place-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem;
  width: 90%;
  

  @media screen and (min-width: 769px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: none;
  }
`;

export const HighlightUsers = styled.div`
  // @property --num {
  //   syntax: "<integer>";
  //   initial-value: 0;
  //   inherits: false;
  // }

  // h2 {
  //   transition: --num 5s;
  //   counter-set: num var(--num);
  //   font: 800 40px system-ui;
  // }
  // h2::after {
  //   content: counter(num);
  // }
  // h2:hover {
  //   --num: 20;
  // }
  .number__position {
    display: flex;
    gap: 2px;
    align-items: center;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .stats {
    font-size: 3rem;
    font-weight: 700;
    display: flex;
    gap: 0.2rem;
    align-items: center;
    color: #ff6666;
  }
  .title {
    font-weight: 700;
    font-size: 1.5rem;
    color: black;
    text-align: center;
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
export const HighlightRating = styled.div`
  .number__position {
    display: flex;
    gap: 2px;
    align-items: center;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .stats {
    font-size: 3rem;
    font-weight: 700;
    display: flex;
    gap: 0.2rem;
    align-items: center;
    color: #ff6666;
  }
  .title {
    font-weight: 700;
    font-size: 1.5rem;
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
export const HighlightFaces = styled.div`
  .number__position {
    display: flex;
    gap: 2px;
    align-items: center;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .stats {
    font-size: 3rem;
    font-weight: 700;
    display: flex;
    gap: 0.2rem;
    align-items: center;
    color: #ff6666;
  }
  .title {
    font-weight: 700;
    font-size: 1.5rem;
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
