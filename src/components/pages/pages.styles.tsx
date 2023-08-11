import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 50px;
`;

export const Repository = styled.div`
  width: 100%;
  flex-basis: 33.3%;
  background: teal;
  padding: 20px;
  border: 5px solid white;
  border-radius: 14px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
`;

export const Button = styled.button`
  height: 50px;
  width: 100px;
  background: white;
  color: black;
`;
