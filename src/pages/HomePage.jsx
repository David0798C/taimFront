import {
  Enlace,
  Button,
  Container,
  ButtonContainer,
  DescriptionContainer,
  Description,
  H1,
  GlobalStyle,
} from "../styledComponents/StyledHomePages.js";

import { useContext, useEffect } from "react";
import { MyContext } from "../MyContext.js";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa los estilos CSS de AOS

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
      once: true, // La animación ocurre solo una vez
    });
  }, []);

  const { logged, setLogged } = useContext(MyContext);


  return (
    <>
      <GlobalStyle />
      <H1 className="animate__animated animate__slideInLeft">T A I M</H1>

      {!logged && (
        <ButtonContainer>
          <Button>
            <Enlace href="/login">Inicio Sesión</Enlace>
          </Button>
          <Button>
            <Enlace href="/register">Registrarse</Enlace>
          </Button>
        </ButtonContainer>
      )}

      <Container>
        <DescriptionContainer>
          <Description data-aos="fade-up">
            <h1>¿Qué es TAIM?</h1>
            <p>
              TAIM, Tiempo Acumulado de Intercambio Mutuo, <br /> es una web de
              intercambio de servicios en el cual la moneda de cambio es el
              tiempo. <br /> Somos los poco conocidos Bancos del Tiempo.
            </p>
          </Description>
          <Description data-aos="fade-up">
            <h1>¿Qué ofrecemos?</h1>
            <p>
              En esta web encontrarás a personas que ofrecen sus habilidades y
              conocimientos a cambio de las tuyas.
            </p>
          </Description>
          <Description data-aos="fade-up">
            <h1>¿Cómo funciona?</h1>
            <p>
              Lo primero de todo será registrarse en la página. <br />
              Luego tendrás que rellenar tu perfil con las habilidades y
              conocimientos que tienes para ofrecer y lo que te gustaría recibir
              a cambio de ellas. <br />A continuación tendrás que añadir lo más
              valioso: <strong>Tu tiempo</strong>. <br />
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
