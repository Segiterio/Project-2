import styled from "styled-components";

export const HeroContainer = styled.section`
     display: flex;
     flex-direction: column;
     align-items: center;
     gap: 1.6rem;
     padding: 2rem 0;
     z-index: 5;
     position: relative;
   
   & > p {
     text-align: center;
   }
`

export const HeroImageContainer = styled.div`
   &,
   & > img {
     position: relative;
   }
   
   & > button {
     padding: .8rem 2rem;
     background-color: var(--Green_gray);
     color: white;
     border-radius: 5px;
     font-size: .875rem;
     font-weight: 700;
     position: absolute;
     top: 0;
     left: 50%;
     transform: translate(-50%);
     white-space: nowrap;
   }
`

