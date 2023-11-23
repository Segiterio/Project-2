import styled from "styled-components";
export const HeroStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding:2.5rem;
  gap: 1rem;
  @media (max-width: 920px) {
    align-items: center;
    flex-direction: column;
  }
  .element {
    display: flex;
    flex-direction: column;
    gap: 40px;
   
    @media (max-width: 920px) {
      align-items: center;
      margin-top: 10px;
    }
  }
  .element__heading {
    font-family: "Montserrat", sans-serif;
    text-align: left;
    @media (max-width: 920px) {
      text-align: center;
    }
  }
  .element__subheading {
    font-weight: 700;
    margin-top: 20px;
    font-family: "Montserrat", sans-serif;
    text-align: left;
    font-size: 1.5rem;
    color:#526D82;
    @media (max-width: 920px) {
      text-align: center;
    }
  }
  h1 {
    text-align: left;
  }
  .button__style {
    padding: 0.8rem 2rem;
    background-color: #1e90ff;
    color: white;
    border-radius: 5px;
    font-size: 0.875rem;
    font-weight: 700;
    white-space: nowrap;
    border: none;
    cursor: pointer;
    text-align: center;
    font-family: "Arial", sans-serif;
    width: fit-content;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    @media screen and (min-width: 769px) {
      font-size: 1.125rem;
    }
  }
  .button__style:hover {
    background-color: #007bff;
  }
`;
export const HeroImageContainer = styled.div`
  .image__style {
    max-width: 700px;
    height: 466px;
    @media (max-width: 1024px) {
      max-width: 500px;
      height: 333px;
    }
    @media (max-width: 450px) {
      max-width: 380px;
      height: 253px; 
    }
  }
`;
