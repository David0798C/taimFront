import gifAnimado from "../pic/gitAnimado.gif";
import gifEstatico from "../pic/gitEstatico.png";
import {
  Enlace,
  Button,
  Container,
  ButtonContainer,
  Background,
  DescriptionContainer,
  Description,
  H1,
} from "../styledComponents/StyledHomePages.js";
import { useState } from "react";
import { Gif } from "../styledComponents/StyledHomePages.js";
import { useContext } from 'react';
import { MyContext } from '../MyContext.js';

const HomePage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { logged, setLogged } = useContext(MyContext);

  const handleMouseEnter = () => {
    if (!isAnimating) {
      setIsHovered(true);
      setIsAnimating(true);
      setTimeout(() => {
        setIsHovered(false);
        setIsAnimating(false);
      }, 2500); // La duración del GIF en milisegundos
    }
  };
  
  return (
    <>
      <Background />        {!logged &&
          <ButtonContainer>
            <Button>
              <Enlace to="/login">Inicio Sesión</Enlace>
            </Button>
            <Button>
              <Enlace to="/register">Registrarse</Enlace>
            </Button>
          </ButtonContainer>
        }
      <Container onMouseEnter={handleMouseEnter}>
        <Gif src={isHovered ? gifAnimado : gifEstatico} alt="Mi GIF" />
        <H1>T  A  I  M</H1>


        <DescriptionContainer>
          <Description>
            <h1>¿Qué es TAIM?</h1>
            <p>
              TAIM, Tiempo Acumulado de Intercamvio Mutuo, <br /> es una web de intercambio de servicios en el cual la moneda
              de cambio es el tiempo. <br /> Somos los poco conocidos Bancos del
              Tiempo.
            </p>
          </Description>
          <Description>
            <h1>¿Qué ofrecemos?</h1>
            <p>
              En esta web encontrarás a personas que ofrecen sus habilidades y
              conocimientos a cambio de las tuyas.
            </p>
          </Description>
          <Description>
            <h1>¿Cómo funciona?</h1>
            <p>
              Lo primero de todo será registrarse en la página. <br />
              Luego tendrás que rellenar tu perfil con las habilidades y
              conocimientos que tienes para ofrecer y lo que te gustaría recibir
              a cambio de ellas. <br />A continuación tendrás que añadir lo más
              valioso: <strong>Tu tiempo</strong> . <br />
              Una vez todo esto añadido podrás esperar que alguien quiera hacer
              un trato contigo o <br />
              entrar en la sección de Ofertas y ver qué cosas hay que te
              interesen y hacer tú los tratos.
            </p>
          </Description>
        </DescriptionContainer>
      </Container>
    </>
  );
};


export default HomePage;
