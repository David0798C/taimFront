import styled from "styled-components";

export const ContainerCreate = styled.div`
  width: 100%;
  background-color: red;
  margin: auto;
  height: 1000px;
`;

export const H1 = styled.h1`
  text-align: center;
`;

export const ContainerIzq = styled.div`
  width: 50%;
  background-color: blue;
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
