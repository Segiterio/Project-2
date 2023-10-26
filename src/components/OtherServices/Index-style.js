import styled from "styled-components";


export const HeadingContainer = styled.div`
  color:white
`
export const OtherServicesContainer = styled.section`
  background-color: #ff6666;
  padding: 2rem 0;

  @media screen and (min-width: 769px) {
    padding: 4rem 0;
  }
`;

export const FeaturesContainer = styled.div`
  display: grid;
  grid-template-rows: none;
  grid-auto-flow: row;
  place-items: center;
  column-gap: 0rem;
  row-gap: 2.5rem;
  margin: 1.5rem 0;

  @media screen and (min-width: 769px) {
    grid-auto-flow: column;
    grid-template-rows: 1fr 1fr;
    column-gap: 1.5rem;
    row-gap: 4.5rem;
    margin: 3rem 0;
  }
`;
