import {
  Enlace,
  Button,
  Container,
  ButtonContainer,
  DescriptionContainer,
  Description,
  H1,
  GlobalStyle,
  ContentContainer,
  Footer // Asegúrate de importar el Footer
} from "../styledComponents/StyledHomePages.js";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { useUserContext } from '../providers/UserProvider.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import fundacion from '../pic/fundacionesplai.png'
import logo from '../pic/gitEstatico.png'
const HomePage = () => {
  const [user] = useUserContext();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);


  return (
    <>
      <GlobalStyle />
      <H1 className="animate__animated animate__flash">T A I M</H1>

      {!user && (
        <ButtonContainer>
          <Button>
            <Enlace to="/login">Inicio Sesión</Enlace>
          </Button>
          <Button>
            <Enlace to="/register">Registrarse</Enlace>
          </Button>
        </ButtonContainer>
      )}

      <ContentContainer>
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
                valioso: <strong>Tu tiempo</strong> . <br />
                Una vez todo esto añadido podrás esperar que alguien quiera hacer
                un trato contigo o <br />
                entrar en la sección de Ofertas y ver qué cosas hay que te
                interesen y hacer tú los tratos.
              </p>
            </Description>
          </DescriptionContainer>
        </Container>
      </ContentContainer>

      <Footer>
  <div className="footer-content">
    <div className="images">
      <img src={fundacion} alt="Imagen 1" style={{ float: 'left' }} />
      <img src={logo} alt="Imagen 2" style={{ float: 'right' }} />
    </div>
    <div className="content-center">
      
      <div className="social-media">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
      <div className="contact">
        <Enlace to="/about">CONOCE MÁS SOBRE NUESTRO EQUIPO</Enlace>
        <p>Contacto: <a href="mailto:contacto@tuempresa.com">contacto@tuempresa.com</a></p>
      </div>
    </div>
  </div>
</Footer>

    </>
  );
};

export default HomePage;

