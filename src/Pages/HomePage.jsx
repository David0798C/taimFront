import Logo from '../pic/Ilustración_con_título.png';
import { Enlace, Button, Img, Container, ButtonContainer, Background, DescriptionContainer, Description } from '../StyledComponents/StyledHomePages';

const HomePage = () => {
  return (
    <>
      <Background />
      <Container>
        <Img src={Logo} alt="Logo" />
        <ButtonContainer>
          <Button>
            <Enlace to="/login">Inicio Sesión</Enlace>
          </Button>
          <Button>
            <Enlace to="/register">Registrarse</Enlace>
          </Button>
        </ButtonContainer>
        <DescriptionContainer>
          <Description>
            <h1>¿Qué es TAIM?</h1>
            <p>Taim es una web de intercambio de servicios en el cual la moneda de cambio es el tiempo. <br /> Somos los poco conocidos Bancos del Tiempo.</p>
          </Description>
          <Description>
            <h1>¿Qué ofrecemos?</h1>
            <p>En esta web encontrarás a personas que ofrecen sus habilidades y conocimientos a cambio de las tuyas.</p>
          </Description>
                  <Description>
          <h1>¿Cómo funciona?</h1>
          <p>
            Lo primero de todo será registrarse en la página. <br />
            Luego tendrás que rellenar tu perfil con las habilidades y conocimientos que tienes para ofrecer y lo que te gustaría recibir a cambio de ellas. <br />
            A continuación tendrás que añadir lo más valioso: <strong>Tu tiempo</strong> . <br />
            Una vez todo esto añadido podrás esperar que alguien quiera hacer un trato contigo o <br />
            entrar en la sección de Ofertas y ver qué cosas hay que te interesen y hacer tú los tratos.
          </p>
        </Description>
        </DescriptionContainer>

      </Container>
    </>
  );
};

export default HomePage;
