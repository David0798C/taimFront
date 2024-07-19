// HomePageStyles.js
import { Link } from "react-router-dom";
import styled from "styled-components";
import BackgroundImage from "../pic/StockCake-Digital Data Stream_1721312349.jpg";
import { createGlobalStyle } from "styled-components";
import font from "../fonts/aukim/AukimLight.otf";

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

export const ContentContainer = styled.div`
  flex: 1; /* Hace que este contenedor ocupe todo el espacio disponible */
`;
export const GlobalStyle = createGlobalStyle`
    body {
        font-family: myFont;
        font-size: 1.5rem;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        position: relative;
        min-height: 100%;
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
        opacity: 0.8;
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
  font-family: myFont;

  &:hover {
    transition: 0.2s;
    border-color: #4ad627;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0; /* Asegúrate de que no haya padding */
  margin: 0; /* Asegúrate de que no haya margen */
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
  max-width: 1200px;
  width: 100%;
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

export const TeamContainer = styled.div`
  margin: 50px 0;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 1200px;
  width: 100%;
`;

export const TeamCarousel = styled.div`
  margin-top: 20px;
`;

export const TeamMember = styled.div`
  padding: 10px;
`;

export const MemberPhoto = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const MemberDescription = styled.div`
  margin-top: 10px;
`;

export const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
`;
export const Footer = styled.footer`
  background-color: #4ad627;
  width: 100%;
  padding: 20px 0; /* Puedes ajustar el padding según necesites */
  color: white;
  text-align: center;
`;
