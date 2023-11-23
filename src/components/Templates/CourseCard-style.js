import styled from "styled-components";

export const Card = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  border-radius: 10px;
  transition: scale 150ms ease-in;
  background-color: #fff;
  &:hover {
     scale: 1.04;
     box-shadow: 1px 1px 4px 0 rgba(0,0,0,0.3);
  }

  border:1px solid #818FB499;
  overflow: hidden;
  width: 100%;
  height: 100%;
  & > div:first-child {
    padding: .8rem;
    width: 100%;
    display: flex;
    justify-content: center;
    
    overflow:hidden;
    & > img {
      border:1px solid #818FB499;
      border-radius:10px;
      width: 340px;
      height: 220px;
      object-fit: cover;
    }
  }
`;
export const Title = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  border-bottom:2px solid red;
  width: fit-content;
`;

export const Description = styled.p`
  line-height: 1.5;
  font-size: 0.875rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.725rem;
`;

export const ContentContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.725rem;
`;

export const Btn = styled.button`
  padding: 0.5rem 1rem;
  border: transparent;
  background: dodgerblue;
  color: white;
  border-radius: 4px;
  width: fit-content;
  margin-bottom: .5rem;
  display: flex;
  gap:.2rem;
  align-items: center;

  &:hover {
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(30, 144, 255, 1) 0%,
      rgba(0, 212, 255, 1) 100%
    );
    cursor: pointer;
  }

  &:active {
    transform: translate(0em, 0.2em);
  }
`;
