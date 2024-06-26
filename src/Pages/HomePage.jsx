
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../pic/Ilustración_con_título.png';

// Estilos para los enlaces
const Enlace = styled(Link)`
  text-decoration: none;
  color: black;
  display: block;
  padding: 10px 20px;
`;

// Estilos para los botones
const Button = styled.button`
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

// Estilos para la imagen
const Img = styled.img`
  width: 30%;
  height: auto;
  display: block;
`;

// Contenedor para centrar los elementos
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const HomePage = () => {
  return (
    <Container>
      <Img src={Logo} alt="" />
      <ButtonContainer>
        <Button>
          <Enlace to="/login">Inicio Sesión</Enlace>
        </Button>
        <Button>
          <Enlace to="/register">Registrarse</Enlace>
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default HomePage;
