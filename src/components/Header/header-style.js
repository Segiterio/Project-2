import styled from "styled-components";


export const Top = styled.header`
  justify-content: space-between;
  padding: .5rem .6rem;
  font-size: .875rem;

  @media screen and (min-width:769px) {
  
    padding: .5rem 1.5;
    font-size: 1rem;
    font-weight: 600;
  }

`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  gap: 0.4rem;
  font-weight: 700;

  & > img {
     width: 120px;
     height: 85px;
  }

  @media screen and (min-width:769px) {
    font-size: 1rem;
    gap: .8rem;
    & > img  {
       width: 180px;
       height: 127px;
    }
  }
`;

export const MenuContainer = styled.nav`
  display: none;
  @media screen and (min-width: 769px) {
    & {
      display: flex;
      align-items: center;
      margin-left: 3rem;
      gap: min(1.5rem, 2vw);
      cursor: pointer;
    }

    & > *:hover {
      text-decoration: underline;
      text-underline-offset: 0.2rem;
    }
  }
  @media screen and (min-width: 1024px) {
    & {
      margin-left: 5rem;
   
    }
  }
`;


export const BookDemoBtn = styled.div`
  padding:.3rem .6rem ;
  border:1px solid;
  background-color: #1e90ff;
  color:white;
  border-radius: 5px;
  font-weight: 600;
  transition: scale 150ms ease-in;
  cursor: pointer;

  &:hover {
     scale: 95%;
  }
`
