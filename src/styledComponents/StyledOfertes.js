import styled from "styled-components";
import font from "../fonts/aukim/AukimLight.otf";

export const ContainerOfertas = styled.div`
  max-width: 100%;
  margin: auto;
  padding: 0px;
  margin-top:3%;
`;

export const ContainerRow = styled.div`
  padding: 10px;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 768px) {
    display: block;
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ContainerColumn = styled.div`
  padding: 20px;
  background-color: white;
  margin: 10px;
  box-shadow: 8px 5px 10px #d1d1d1;
  border-left: 2px solid #22df22;
  border-top: 2px solid #22df22;
  border-left-style: dashed;
  border-top-style: dashed;
  border-radius: 5px;

  @media (max-width: 800px) {
    display: block;
  }
`;

//IMAGENES, BOTONES Y INPUTS-----------------------
export const Image = styled.div`
  width: 200px;
  height: 300px;
  margin: auto;
  background-color: #22df22;
  border-radius: 5px;
`;

export const Button = styled.button`
  margin-top: 20px;
  margin: auto;
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

//TEXTOS--------------------------------------
export const H1 = styled.h1`
  text-align: center;
`;

export const H3 = styled.h3`
  text-align: center;
`;

export const H4 = styled.h4`
  text-align: center;
`;

export const P = styled.p`
  text-align: center;
`;
