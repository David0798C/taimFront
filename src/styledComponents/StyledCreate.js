import styled from "styled-components";
import font from "../fonts/aukim/AukimLight.otf";

export const ContainerCreate = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 3%;
  background-color: #fcfdfc1e;
  height: 100%;
`;

export const H1 = styled.h1`
  text-align: center;
`;

export const ContainerInput = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fcfdfcf8;
  border-radius: 5px;
  padding: 40px;
`;

export const Input = styled.input`
  padding: 10px;
  margin: auto;
  margin-top: 20px;
  background-image: linear-gradient(#4ad627, #4ad627),
    linear-gradient(#bfbfbf, #bfbfbf);
  border-right: 2px solid gray;
  border-left: 2px solid gray;
  border-top: 2px solid gray;
  border-bottom: 0px;

  box-shadow: none;
  float: none;
  border-radius: 2px;
  background-position: center bottom, center calc(100% - 1px);
  background-repeat: no-repeat;
  background-size: 0 2px, 100% 1px;
  background-color: #ffffffcc;

  color: #bfbfbf;
  min-height: 35px;
  width: 70%;
  outline: none;
  font-size: 15px;
  font-family: myFont;

  @font-face {
    font-family: myFont;
    src: url(${font});
    color: black;
  }
  &:focus {
    background-size: 100% 2px, 100% 1px;
    outline: 0 none;
    transition-duration: 0.3s;
    color: #525252;
    border: 0px;
  }
`;

export const Button = styled.button`
  margin-top: 40px;

  width: 150px;
  border-radius: 5px;
  padding: 10px;
  background-color: transparent;
  border: 2px solid black;
  color: black;
  display: block;
  font-family: myFont;

  @font-face {
    font-family: myFont;
    src: url(${font});
    color: black;
  }

  &:hover {
    transition: 0.2s;
    border-color: #4ad627;
  }
`;
