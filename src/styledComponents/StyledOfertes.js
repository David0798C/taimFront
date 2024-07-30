import styled from "styled-components";
import font from "../fonts/aukim/AukimLight.otf";

export const ContainerOfertas = styled.div`
  max-width: 85%;
  margin: 3% auto;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ContainerRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  padding: 10px;
`;

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;  /* Distribute space evenly between elements */
  padding: 15px;
  background-color: #fff;
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-left: 3px solid #4ad627;
  border-top: 3px solid #4ad627;
  border-radius: 10px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
  
  @media (max-width: 800px) {
    display: block;
  }
`;

//IMAGENES, BOTONES Y INPUTS-----------------------
export const Image = styled.div`
  width: 100%;
  height: 180px;
  margin: 15px 0;
  background-color: #eaeaea;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
`;

export const Button = styled.button`
  width: 100%;
  border-radius: 5px;
  padding: 8px;
  background-color: #4ad627;
  border: none;
  color: #fff;
  font-family: myFont;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: auto;  /* Push button to the bottom of the column */

  @font-face {
    font-family: myFont;
    src: url(${font});
  }

  &:hover {
    background-color: #3ab020;
  }
`;

//TEXTOS--------------------------------------
export const H1 = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  font-family: myFont;
  font-size: 2.2em;
  color: #333;
`;

export const H3 = styled.h3`
  text-align: center;
  font-family: myFont;
  font-size: 1.3em;
  color: #4ad627;
`;

export const H4 = styled.h4`
  text-align: center;
  font-family: myFont;
  font-size: 1em;
  color: #777;
  margin-bottom: 15px;
`;

export const P = styled.p`
  text-align: center;
  font-family: myFont;
  font-size: 0.9em;
  color: #555;
  margin: 8px 0;
`;
