import styled from "styled-components";
import { Link } from "react-router-dom";
import font from "../fonts/aukim/AukimLight.otf";

export const LoginContainer = styled.div`
  max-width: 80%;
  float: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  text-align: center;
  border-radius: 5px;
  position: relative;
  top: 150px;
  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

export const LoginStyle = styled.div`
  margin: auto;
  width: 70%;
  border-radius: 5px;
  background-color: #ffffffcd;
  padding: 30px;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Input = styled.input`
  margin-top: 20px;
  background-image: linear-gradient(#64e320, #64e320),
    linear-gradient(#bfbfbf, #bfbfbf);
  border: 0 none;
  border-radius: 0;
  box-shadow: none;
  float: none;
  background-color: transparent;
  background-position: center bottom, center calc(100% - 1px);
  background-repeat: no-repeat;
  background-size: 0 2px, 100% 1px;
  padding: 0;
  color: black;
  min-height: 35px;
  display: initial;
  width: 100%;
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
    color: black;
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  margin-bottom: 10px;
  width: 100px;
  border-radius: 5px;
  background-color: transparent;
  border: 2px solid black;
  color: black;
  height: 40px;
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

export const Enlace = styled(Link)`
  text-decoration: none;
  color: black;
  display: block;
`;
export const Parrafo = styled.p`
  color: red;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
`;
