import styled from "styled-components";
export const HeroStyled = styled.div`
  padding: 20px 20px 50px 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 920px) {
    align-items: center;
    flex-direction: column;
  }
  .element {
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-top: 100px;
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
    font-family: "Arial", sans-serif;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    width: 180px;
    @media screen and (min-width: 769px) {
      font-size: 1.125rem;
    }
  }
  .button__style:hover {
    background-color: #007bff;
  }
`;
export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  padding: 2rem 0;
  z-index: 5;
  position: relative;

  & > p {
    text-align: left;
  }
  @media screen and (min-width: 769px) {
    padding: 4rem 0;
  }
`;

export const HeroImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &,
  & > img {
    position: relative;
  }
  & > button {
    padding: 0.8rem 2rem;
    background-color: #1e90ff;
    color: white;
    border-radius: 5px;
    font-size: 0.875rem;
    font-weight: 700;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    border: none;
    cursor: pointer;
    font-family: "Arial", sans-serif;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  }

  @media screen and (min-width: 769px) {
    & > button {
      font-size: 1.125rem;
    }
  }

  & > button:hover {
    background-color: #007bff;
  }
  .image__style {
    max-width: 700px;
    height: 600px;
    @media (max-width: 963px) {
      max-width: 500px;
      height: 400px;
    }
    @media (max-width: 400px) {
      max-width: 300px;
      height: 350px;
    }
  }
`;
