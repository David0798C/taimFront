import { Link } from 'react-router-dom';
import styled from 'styled-components';
import homeIcon from '../pic/logoLayout.png';

// Estilos para la navegación
const Nav = styled.nav`
  background-color: #fff;
  opacity: 0.8;
  margin-top: 5px;
  margin-bottom: 20px;
  font-family: Arial, Helvetica, sans-serif;
  position: fixed; /* Fijo en la pantalla */
  top: 0; /* Alineado al tope de la pantalla */
  left: 0; /* Alineado al lado izquierdo de la pantalla */
  width: 100%; /* Ocupa todo el ancho de la pantalla */
  z-index: 1000; /* Asegura que esté por encima de otros elementos */
  display: flex;
  align-items: center; /* Centra verticalmente el contenido */
`;

const Img = styled.img`
  width: 10%;
  height: auto;
  cursor: pointer;
  margin-right: auto;
  padding-left: 50px; /* Empuja la imagen hacia la izquierda */
`;

// Estilos para la lista de navegación
const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
  width: 100%; /* Ocupa todo el ancho disponible */
  position: relative;
  
  @media (max-width: 768px) {
    justify-content: space-around;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Estilos para los elementos de la lista de navegación
const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin: 0 10px;
  }

  @media (max-width: 480px) {
    margin: 10px 0;
  }

  a {
    text-decoration: none;
    color: #000;
    font-size: 22px;
    padding: 10px 20px;
    border-radius: 8px;

    @media (max-width: 768px) {
      font-size: 14px;
      padding: 8px 16px;
    }
  }
`;


// Contenedor para el layout
const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px; /* Añadir padding para compensar la barra de navegación fija */
`;

// Contenedor para el contenido
const Content = styled.div`
  flex: 1;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    max-width: 960px;
  }

  @media (max-width: 992px) {
    max-width: 720px;
  }

  @media (max-width: 768px) {
    max-width: 540px;
    padding: 15px;
  }

  @media (max-width: 576px) {
    max-width: 100%;
    padding: 10px;
  }
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Nav>
        <Li><Link to="/"><Img src={homeIcon} alt="Home" /></Link></Li>
        <Ul>
          <Li><Link to="/ofertas">Ofertas</Link></Li>
          <Li><Link to="/user">User</Link></Li>
          <Li><Link to="/create">Create</Link></Li>
          <Li><Link to="/register">Registrarse</Link></Li>
          <Li><Link to="/login">Login</Link></Li>
        </Ul>
      </Nav>
      <Content>
        {children}
      </Content>
    </LayoutContainer>
  );
};

export default Layout;

