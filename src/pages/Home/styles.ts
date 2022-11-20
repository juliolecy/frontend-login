import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  div {
    font-family: "Montserrat", sans-serif;
    padding: 10px;
    text-align: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 192px;
    height: 63px;

    border: none;
    color: #fff;
    transition: ease-out 0.3s;
    font-size: 1.2rem;
    outline: none;
    border: 3px solid #ffffff;
    position: relative;
    z-index: 1;
    background: transparent;
    &:hover {
      cursor: pointer;
      a {
        color: black;
      }
    }
    &:before {
      color: black;
      transition: 0.5s all ease;
      position: absolute;
      top: 0;
      left: 50%;
      right: 50%;
      bottom: 0;
      opacity: 0;
      content: "";
      background-color: #ffffff;
    }
    &:hover:before {
      transition: all ease 0.5s;
      left: 0;
      right: 0;
      opacity: 1;
      z-index: -1;
    }
    a {
      text-decoration: none;
      color: #fff;
    }
  }
`;
