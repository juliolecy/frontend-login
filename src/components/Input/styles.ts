import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 42px;
  color: #fff;
  margin: 10px 0;

  border: 1px solid #ffffff47;
  border-radius: 21px;
  overflow: hidden;
  padding: 0 10px;

  & input {
    width: 100%;
    height: 42px;
    border-radius: 21px;
    background-color: transparent;
    border: 0;
    outline: none;
    color: white;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin: 0 0 15px;
`;
