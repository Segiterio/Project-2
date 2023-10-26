import styled from "styled-components";

export const LearnBtn = styled.button`
  color: #3183ff;
  font-size: 0.875rem;
  border: none;
  padding:.2rem .4rem;
  display: flex;
  gap: 0.4rem;
  align-items: center;
  border-radius: 5px;
  margin-top:.5rem;
`;

export const Card = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  color: white;
`;
export const ServiceTitle = styled.div`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.2rem;

  & + p {
    line-height: 2;
    font-size: 0.875rem;
  }
`;
