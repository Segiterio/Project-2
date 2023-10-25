import styled from "styled-components";

export const HighlightContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin:0 auto;
  padding:2rem 0;
  justify-content: space-between;
  align-items: center;
  flex-wrap:wrap;
  width: 90%;
`

export const Highlight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  & > h2 {
     font-size: 1.75rem;
     font-weight: bold;
     color:purple;
  }

& > p { 
    font-size: 1rem;
    color:gray;
}

@media screen and (min-width:600px) {
    & > h2 {
         font-size: 1.5rem;
    }
    & > p {
         font-size: .5rem;
    }
}
`