import {
  Enlace,
  Button,
  Container,
  ButtonContainer,
  DescriptionContainer,
  Description,
  H1,
  H2,
  GlobalStyle,
  ContentContainer,
  Footer,
  BackgroundSection,
  WhiteBackgroundContentContainer // Importa el nuevo contenedor
} from "../styledComponents/StyledHomePages.js";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { useUserContext } from '../providers/UserProvider.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import fundacion from '../pic/fundacionesplai.png';
import logo from '../pic/gitEstatico.png';
import fondo1 from '../pic/StockCake-Plumber at Work_1722085890.jpg';
import fondo2 from '../pic/StockCake-Virtual Meeting Setup_1722090681.jpg';
import fondo3 from '../pic/StockCake-Guitar Lesson Together_1722085771.jpg';
import fondo4 from '../pic/StockCake-Sunlight through trees_1722082539.jpg';

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
      <H2 className="animate__animated animate__flash">Tiempo Acumulado de Intercambio Mutuo</H2>
      <img src="../pic/gitEstatico.png" alt="" />
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

      <BackgroundSection backgroundImage={fondo1} data-aos="fade-up">
        <ContentContainer>
          <Container>
            <DescriptionContainer>
              <Description data-aos="fade-up">
                <h1>¿Qué es TAIM?</h1>
                <p>
                  TAIM es una plataforma de intercambio de servicios donde la moneda de cambio es el tiempo.
                  Facilitamos la interacción entre personas para que puedan ayudarse mutuamente.
                </p>
              </Description>
            </DescriptionContainer>
          </Container>
        </ContentContainer>
      </BackgroundSection>
      <WhiteBackgroundContentContainer>
        <Container>
          <DescriptionContainer>
            <Description data-aos="fade-up">
              <h1>¿Qué ofrecemos?</h1>
              <p>
                Ofrecemos una forma en que las personas puedan
                ayudarse entre sí mientras demuestran sus habilidades y talentos al mundo, ofreciendo servicios a quienes los necesiten.
              </p>

            </Description>
          </DescriptionContainer>
        </Container>
      </WhiteBackgroundContentContainer>
      <BackgroundSection backgroundImage={fondo3} >
        <ContentContainer>
          <Container>
            <DescriptionContainer>
              <Description data-aos="fade-up">
                <h1>¿Cómo funciona?</h1>
                <p>
                  <strong>Regístrate:</strong> Lo primero que debes hacer es registrarte en nuestra página. <br />
                  <strong>Completa tu perfil:</strong>  Llena tu perfil con tus habilidades y conocimientos, así como lo que te gustaría recibir a cambio de ellos. <br />
                  <strong>Añade tu tiempo:</strong>  La parte más valiosa es tu tiempo. Añádelo para que otros usuarios puedan ver qué estás dispuesto a ofrecer. <br />
                  <strong>Intercambia servicios:</strong>  Una vez completado tu perfil, puedes esperar a que alguien te proponga un trato o buscar en la sección de Ofertas y proponer tus propios intercambios.
                </p>
              </Description>
            </DescriptionContainer>
          </Container>
        </ContentContainer>
      </BackgroundSection>

      <WhiteBackgroundContentContainer>
        <Container>
          <DescriptionContainer>
            <Description data-aos="fade-up">
              <h1>¿Hay algún coste para usar TAIM?</h1>
              <p>
              No, el registro y el uso básico de TAIM son completamente gratuitos. 
              Nuestra misión es facilitar el intercambio de servicios a través del 
              tiempo como moneda de cambio. 
              </p>
            </Description>
          </DescriptionContainer>
        </Container>
      </WhiteBackgroundContentContainer>
      <BackgroundSection backgroundImage={fondo2} >
        <ContentContainer>
          <Container>
            <DescriptionContainer>
              <Description data-aos="fade-up">
                <h1>¿Quién puede usar TAIM?</h1>
                <p>
                  Cualquier persona interesada en intercambiar servicios y habilidades puede usar TAIM. No importa tu profesión,
                  experiencia o ubicación; todos son bienvenidos a formar parte de nuestra comunidad de intercambio de tiempo.
                </p>
              </Description>
            </DescriptionContainer>
          </Container>
        </ContentContainer>
      </BackgroundSection>
      <WhiteBackgroundContentContainer>
        <Container>
          <DescriptionContainer>
            <Description data-aos="fade-up">
              <h1>¿Qué tipo de servicios se pueden intercambiar en TAIM?</h1>
              <p>
                En TAIM, puedes intercambiar una amplia variedad de servicios.
                Desde clases particulares y asesorías profesionales hasta servicios domésticos y cuidado de mascotas.
                Nuestra plataforma está diseñada para ser flexible y adaptarse a las habilidades y necesidades de cada usuario.
                <strong>¡Las posibilidades son prácticamente ilimitadas!</strong>
              </p>
            </Description>
          </DescriptionContainer>
        </Container>
      </WhiteBackgroundContentContainer>
      <BackgroundSection backgroundImage={fondo4} data-aos-delay="400" />
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
              <p>Contacto: <a href="mailto:contacto@tuempresa.com">taimproject7@gmail.com</a></p>
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default HomePage;
