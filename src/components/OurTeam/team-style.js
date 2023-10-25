import styled from "styled-components";
// export const TeamContainer = styled.div`
//   display: flex;
//   gap: 1.4rem;
//   padding: 2rem 0;
//   overflow-x: auto;
//   scroll-snap-type: x proximity;

//   @media screen and (min-width:769px) {
//     padding: 4rem 0;
//   }
// `;

export const TeamMember = styled.div`
  padding: 0.5rem;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  & img {
    width: 80px;
    height: 80px;
    border-radius: 100px;
    object-fit: contain;
  }

  & > :first-child {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const Name = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
  color: "";
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 0.5rem;
`;

export const AboutDev = styled.p`
  padding: 1.5rem 0.5rem;
  text-align: justify;
  text-overflow: ellipsis;
  line-clamp: 6;
  overflow-y: auto;
  font-size: 0.875rem;
  max-width: 400px;
`;
