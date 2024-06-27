// HomePageStyles.js
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BackgroundImage from '../pic/fondo2.jpg'

export const Enlace = styled(Link)`
    text-decoration: none;
    color: black;
    display: block;
    padding: 10px 20px;
`;

export const Button = styled.button`
    margin: 10px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    transition: background-color 0.3s;

    &:hover {
    background-color: #f0f0f0;
}
`;

export const Img = styled.img`
    width: 40%;
    height: auto;
    display: block;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
  position: relative; // Añadir posición relativa para que los hijos puedan usar posiciones absolutas
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
`;

export const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${BackgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.6; 
  z-index: -1; // Asegúrate de que el fondo esté detrás de los otros elementos
`;

export const DescriptionContainer = styled.div`

    margin-top: 20px;
    font-size: 1.2em;
`;

export const Description = styled.div`
    margin: 10px;
    padding: 10px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 1200px;
`;
