import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  gap: 0.4rem;
  font-weight: 700;

  @media screen and (min-width:769px) {
    font-size: 1rem;
    gap: .8rem;
  }
`;

export const MenuContainer = styled.nav`
  display: none;
  @media screen and (min-width: 769px) {
    & {
      display: flex;
      align-items: center;
      margin-left: 1.7rem;
      gap: min(1.5rem, 2vw);
      cursor: pointer;
    }

    & > *:hover {
      text-decoration: underline;
      text-underline-offset: 0.2rem;
    }
  }
`;

// export const GetStaredBtn = styled.div`
//   margin-left: 0.5rem;
//   font-size: 0.8rem;
//   color: var(--Green_gray);
//   font-weight: 700;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   position: relative;

//   & > img {
//     width: 100%;
//     position: absolute;
//     bottom: -0.4rem;
//   }

//   & > button {
//     border: none;
//     background-color: transparent;
//   }

//    @media screen and (min-width:769px) {
//     font-size: 1rem;
//     margin-left: 1rem;
//    }
// `;

// export const LoginBtn = styled.button`
//   border: none;
//   background-color: transparent;
//   font-weight: 500;
//   font-size: 0.8rem;
// `;

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
