import styled from "styled-components";
import font from "../fonts/aukim/AukimLight.otf";

export const RegisterContainer = styled.div`
  max-width: 80%;
  /* background-color: #2bca5a; */
  margin: auto;
  text-align: center;

  h1 {
    font-size: 50px;
  }
`;

// export const Image = styled.div`
//   width: 40%;
//   height: auto;
//   display: block;
//   height: 300px;
//   background-color: blue;
//   margin: auto;
// `;

export const InputContainer = styled.div`
  background-color: #e0e0e0e4;
  max-width: 70%;
  margin: auto;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 8px 5px 10px #9a9a9ac0;
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
