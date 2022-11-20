import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  height: 42px;
  background-color: var(--blue);
  color: #fff;
  margin-bottom: 19px;

  border: 1px solid var(--blue);
  border-radius: 21px;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;
