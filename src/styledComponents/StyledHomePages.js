import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import font from "../fonts/aukim/AukimLight.otf";
import { Link } from "react-router-dom";

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
`;

export const H1 = styled.h1`
  color: white;
  padding-bottom: 0;
  display: flex;
  font-size: 12rem;
  flex-wrap: wrap;
  align-content: stretch;
  justify-content:left;
  align-items: baseline;

  .animate__animated {
    animation-delay: 0.2s;
    animation-duration: 10s;
  }
`;
export const H2 = styled.h2`
  color: white;
  display: flex;
  font-size: 4rem;
  padding-left: 20px;
  flex-wrap: wrap;
  align-content: stretch;
  justify-content:left;
  align-items: baseline;

  .animate__animated {
    animation-delay: 0.2s;
    animation-duration: 10s;
  }
`;
export const WhiteBackgroundContentContainer = styled.div`
  background-color: white; /* Fondo blanco */
  padding: 20px; /* Ajusta el padding según sea necesario */
  opacity: 0.8;
`;

export const ContentContainer = styled.div`
  flex: 1;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
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

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const Footer = styled.footer`
  background-color: #4ad627;
  width: 100%;
  color: white;
  text-align: center;

  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .social-media {
    margin-bottom: 15px;

    a {
      color: white;
      margin: 0 10px;
      font-size: 24px;
      text-decoration: none;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .contact {
    margin-bottom: 15px;

    a {
      color: white;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .images {
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 140px;
    left: 0;
    padding: 0 20px;

    img {
      width: 200px;
      height: auto;
      margin: 5px;
    }
  }

  .content-center {
    padding-top: 50px;
  }
`;

export const BackgroundSection = styled.section`
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 50px 0;
  width: 100%;
`;
