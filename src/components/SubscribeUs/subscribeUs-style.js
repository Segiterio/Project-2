import styled from "styled-components";

export const Container = styled.div`
  background-color: #1e90ff;
  padding: 5rem 0;
  position: relative;
`;

export const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 5px;
  background-color: white;
  z-index: 10;
  position: relative;
  gap: 2rem;

  @media screen and (min-width: 769px) {
    flex-direction: row;
    padding: 1.5rem;
  }
`;

export const Cactus = styled.img`
  position: absolute;
  z-index: 0;
  bottom: 0;
  left: 2rem;
`;

export const Books = styled.img`
  position: absolute;
  z-index: 0;
  bottom: 0;
  right: 2rem;
`;

export const Strips1 = styled.img`
  position: absolute;
  z-index: 0;
  top: 0;
  right: 10%;
`;
export const Strips2 = styled.img`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
`;
export const Ballons = styled.img`
  position: absolute;
  z-index: 0;
  bottom: 0;
  left: 10%;
`;

export const SubscribeBtn = styled.button`
  background-color: #1e90ff;
  padding: 0.4rem 1rem;
  color: white;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 700;
  border: none;
  white-space: nowrap;
  cursor: pointer;

  @media screen and (min-width: 769px) {
    padding: 0.8rem 2rem;
  }
`;
