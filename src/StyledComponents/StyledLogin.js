import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginContainer = styled.div`
  max-width: 80%;
  background-color: #24b456;
  margin: auto;
  text-align: center;
  border-radius: 5px;
  @media (min-width: 900px) {
    width: 100%;
  }
`;

export const LoginStyle = styled.div`
  margin: auto;
  width: 70%;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  @media (min-width: 900px) {
    width: 70%;
  }
`;

export const Input = styled.input`
  display: block;
  margin: 20px;
  border-radius: 5px;
  padding: 10px;
`;

export const Button = styled.button`
  display: block;
  margin: 20px;
  border-radius: 5px;
  padding: 10px;
  font-size: 20px;
  &:hover {
    background-color: #ffffff;
    transition: 0.5s;
  }
`;

export const Enlace = styled(Link)`
  text-decoration: none;
  color: black;
`;
