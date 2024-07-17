import {
  Enlace,
  Button,
  Container,
  ButtonContainer,
  DescriptionContainer,
  Description,
  H1,
  GlobalStyle,
  TeamContainer,
  TeamCarousel,
  TeamMember,
  MemberPhoto,
  MemberDescription,
  ContentContainer,
  Footer
} from "../styledComponents/StyledHomePages.js";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa los estilos CSS de AOS
import { useEffect, useState } from "react";
import { useUserContext } from '../providers/UserProvider.jsx'; // Importa el contexto del usuario
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importa las imágenes del equipo
import fondo9 from '../pic/fondo6.jpg';

const HomePage = () => {
  const [user] = useUserContext(); // Obtén el estado del usuario
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    // Inicializa AOS
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
      once: true, // La animación ocurre solo una vez
    });

    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.pageYOffset;
      const pageHeight = document.documentElement.scrollHeight;
      if (scrollPosition >= pageHeight - 100) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    // Añade el event listener para el scroll
    window.addEventListener("scroll", handleScroll);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const teamMembers = [
    {
      name: "David Casas",
      position: "Desarrollador Frontend",
      tasks: "Desarrollo de interfaces y experiencia de usuario.",
      photo: fondo9,
    },
    {
      name: "Anna Canivell",
      position: "Desarrolladora Backend y frontend",
      tasks: "Gestión de bases de datos y servidores.",
      photo: fondo9,
    },
    {
      name: "Eric Gascó",
      position: "Desarrollador Frontend y Backend",
      tasks: "Gestión de bases de datos y servidores.",
      photo: fondo9,
    },
    {
      name: "Carmen Sas",
      position: "Desarrolladora Frontend y Scrum Master",
      tasks: "Desarrollo de interfaces y experiencia de usuario. Diseño de interfaces y mejora de la usabilidad.",
      photo: fondo9,
    },
    {
      name: "Daria Yerashova",
      position: "Desarrolladora Frontend y Scrum Master",
      tasks: "Desarrollo de interfaces y experiencia de usuario. Diseño de interfaces y mejora de la usabilidad.",
      photo: fondo9,
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <GlobalStyle />
      <H1 className="animate__animated animate__slideInLeft">T A I M</H1>

      {!user && ( // Condiciona la renderización de los botones
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

          <TeamContainer data-aos="fade-up">
            <h1>Conoce a nuestro equipo</h1>
            <TeamCarousel>
              <Slider {...settings}>
                {teamMembers.map((member, index) => (
                  <TeamMember key={index}>
                    <MemberPhoto src={member.photo} alt={member.name} />
                    <MemberDescription>
                      <h3>{member.name}</h3>
                      <p>{member.position}</p>
                      <p>{member.tasks}</p>
                    </MemberDescription>
                  </TeamMember>
                ))}
              </Slider>
            </TeamCarousel>
          </TeamContainer>
        </Container>
      </ContentContainer>
      {showFooter && (
        <Footer className="fixed_footer">
          <div className="content">
            <p>derechos reservado @TAIM</p>
          </div>
        </Footer>
      )}
    </>
  );
};

export default HomePage;