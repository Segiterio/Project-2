import styled from "styled-components";

export const ModalContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 50;
`;

export const CenterWait  = styled.div`
  padding:2rem;
  text-align: center;
  font-size: 1.5rem;
  height: 200px;
`

export const ModalBox = styled.div`
  overflow-x: hidden;
  z-index: 100;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 600px;
  width: 90%;
  height: 90%;
  min-height: 300px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);

  @media screen and (min-width:600px){
     height : fit-content ;
  }
`;
export const ModalHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 2rem;
  padding:1rem;
  background-color: #1e90ff;
  color:white;
  align-items: center;
  & > :first-child > h3 {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const ModalMain = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  gap: 1.5rem;
  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 1fr) 50px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    width: 100%;
  }
`;
export const BtnContainer = styled.div`
  grid-column: 1 / span 2;
`;

export const SubmitBtn = styled.button`
  place-self: end;
  padding: 0.4rem 0.8rem;
  font-weight: 600;
  color: white;
  background-color: #1e90ff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: fit-content;
`;

export const LoadingBtn = styled.div`
  place-self: end;
  padding: 0.4rem 0.8rem;
  font-size: .875rem;
  font-weight: 600;
  color: white;
  background-color: #1e90ff;
  border: none;
  border-radius: 5px;
  width: fit-content;
`
export const Label = styled.label``;
export const Input = styled.input`
  border: none;
  border-bottom: 2px solid #3A4750;
  padding: 0 0.2rem;
  &:focus {
    outline: none;
  }
`;

export const Select = styled.select`
  border: none;
  border-bottom: 2px solid #3A4750;
  &:focus {
    outline: none;
  }
`;

export const Errors = styled.span`
  font-size: 0.875rem;
  color: #c70039;
`;
