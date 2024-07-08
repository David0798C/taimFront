import styled from "styled-components";
import { Link } from "react-router-dom";


export const LoginContainer = styled.div`
  max-width: 40%;
  padding-top: 12%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  text-align: center;
  border-radius: 5px;
  @media (min-width: 900px) {
    width: 100%;
  }
`;

export const LoginStyle = styled.div`
  margin: auto;
  width: 40%;
  border-radius: 5px;
  @media (min-width: 900px) {
    width: 70%;
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

  color: #bfbfbf;
  min-height: 35px;
  display: initial;
  width: 100%;
  outline: none;
  font-size: 15px;
  &:focus {
    background-size: 100% 2px, 100% 1px;
    outline: 0 none;
    transition-duration: 0.3s;
    color: #525252;
  }
`;

export const Button = styled.button`
  margin-top: 50px;
  width: 100px;
  border-radius: 5px;
  padding: 5px;
  background-color: transparent;
  border: 2px solid black;
  color: black;
  height: 40px;

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
