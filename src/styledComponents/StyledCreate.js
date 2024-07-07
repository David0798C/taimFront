import styled from "styled-components";


export const ContainerCreate = styled.div`
  width: 100%;
  margin: auto;
  display: flex;

  flex-direction: column;
  align-items: center;
  height: 350px;
`;

export const H1 = styled.h1`
  text-align: center;
`;

export const ContainerInput = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  margin: auto;
  margin-top: 20px;
  background-image: linear-gradient(#64e320, #64e320),
    linear-gradient(#bfbfbf, #bfbfbf);
  border: 0 none;
  box-shadow: none;
  float: none;
  border-radius: 2px;
  background-position: center bottom, center calc(100% - 1px);
  background-repeat: no-repeat;
  background-size: 0 2px, 100% 1px;
  background-color: transparent;
  padding: 0;
  color: #bfbfbf;
  min-height: 35px;
  width: 50%;
  outline: none;
  font-size: 15px;
  &:focus {
    background-size: 100% 2px, 100% 1px;
    outline: 0 none;
    transition-duration: 0.3s;
    color: #525252;
  }
`;

export const InputNumber = styled.input`
  margin-top: 50px;
  border: 0.2em solid #76d429;
  padding: 0.8em 0.9em;
  border-radius: 2em;
  color: #000000;
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

  &:hover {
    transition: 0.2s;
    border-color: #4ad627;
  }
`;
