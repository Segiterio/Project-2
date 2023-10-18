import styled from "styled-components";
export const TeamContainer = styled.div`
  display: flex;
  gap: 1.4rem;
  padding: 2rem 0;
  overflow-x: auto;
  scroll-snap-type: x proximity;
`;

export const TeamMember = styled.div`
  scroll-snap-align: center;
  & img {
    width: 320px;
    height: 360px;
    flex-shrink: 0;
    object-fit: contain;
  }
`;

export const Name = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
  color: "";
`;
