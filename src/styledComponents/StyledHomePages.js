// HomePageStyles.js
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BackgroundImage from '../pic/fondo4.jpg'
import { createGlobalStyle } from 'styled-components';
import font from '../fonts/aukim/AukimLight.otf'


export const GlobalStyle = createGlobalStyle`
    body {
        font-family: myFont;
        font-size: 1.5rem;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        position: relative;
        min-height: 100vh;
    }

    @font-face {
        font-family: myFont;
        src: url(${font});
        color: black;
    }

    body::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(${BackgroundImage});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        opacity: 0.3;
        z-index: -1;
    }
`;

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
    border-radius: 5px;
    border: 2px solid black;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: transparent;
    color: black;

    &:hover {
        transition: 0.2s;
        border-color: #4ad627;
}
`;

export const Container = styled.div`
padding: 0;
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

export const Gif = styled.img`
    width: 100%;
    height: auto;
    display: block;
    text-align: center;
    margin-bottom: 0;
    transition: 0.5s;
`;

export const H1 = styled.h1`
padding-bottom: 0;
    display: flex;
    font-size: 12rem;
    flex-wrap: wrap;
    align-content: stretch;
    justify-content: center;
    align-items: baseline;

    .animate__animated {
        animation-delay: 0.2s;
        animation-duration: 10s;
    }
    `;
