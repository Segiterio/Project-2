import styled from "styled-components";

export const MainServicesContainer = styled.div`
  background-color: rgba(255, 245, 237, .5);
  padding-top: 6rem;
  display: flex;
  position: relative;
  bottom: 4rem;
  flex-direction: column;

`

export const QuoteContainer = styled.div`
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width:769px){
    padding: 6rem 0;
  }
`;

export const Writer = styled.p`
  font-size: 0.875rem;
  font-family: "DM Sans";
  align-self: start;
`;

export const Quote = styled.blockquote`
  font-size: 1.25rem;
  line-height: 2;
  text-align: left;
  max-width: 840px;
  font-family: "B612";
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  margin-top: 2.5rem;

  @media screen and (min-width: 769px) {
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    margin-top: 5rem;
  }
`;
