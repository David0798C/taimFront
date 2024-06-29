import styled from "styled-components";

//DIV Y CONTAINERS-------------

export const ContainerOfertas = styled.div`
  width: 100%;
  margin: auto;
`;

export const ContainerRow = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 50px;
  border-radius: 5px;
  background-color: red;
`;

export const ContainerColumn = styled.div`
  padding: 20px;
  background-color: #ffffff;
  margin: 10px;
  box-shadow: 10px 5px 10px#d9d9d9;
  border-left: 1px solid #22df22;
  border-top: 1px solid #22df22;
  border-radius: 5px;
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
  margin: auto;
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
  text-align: left;
  background-color: #f4f4f4;
  padding: 10px;
  border-radius: 5px;
`;
