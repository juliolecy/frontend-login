import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.div`
  width: 100%;
  height: max-content;
  max-width: 420px;
  background-color: #ffffff04;

  border-radius: 8px;
  padding: 20px;

  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: rgb(255 255 255 / 0%) 0px 50px 100px -20px,
    rgb(255 255 255 / 30%) 0px 30px 60px -30px,
    rgb(255 255 255 / 35%) 0px -2px 6px 0px inset;

  @media screen and (max-width: 458px) {
    margin: 0 20px;
  }
`;

export const Title = styled.h1`
  font-size: 42px;
  font-weight: 700;
  color: var(--blue);
`;
