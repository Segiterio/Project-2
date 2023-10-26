import styled from "styled-components";

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
export const TeamStyle = styled.div`
  .title {
    font-weight: 700;
    font-size: 25px;
    @media (max-width: 920px) {
      font-size: 18px;
    }
  }
  .sub__title {
    font-weight: 400;
    font-size: 15px;
    @media (max-width: 920px) {
    }
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
