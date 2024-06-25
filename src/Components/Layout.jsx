import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Estilos para la navegación
const Nav = styled.nav`
  padding: 10px 10px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-bottom: 20px;
  font-family: Arial, Helvetica, sans-serif;
`;

// Estilos para la lista de navegación
const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;

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
  margin: 0 15px;

  @media (max-width: 768px) {
    margin: 0 10px;
  }

  @media (max-width: 480px) {
    margin: 10px 0;
  }

  a {
    text-decoration: none;
    color: #000;
    font-size: 16px;
    padding: 10px 20px;
    border-radius: 8px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #f0f0f0;
    }

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
        <Ul>
          <Li><Link to="/">Home</Link></Li>
          <Li><Link to="/login">Login</Link></Li>
          <Li><Link to="/user">User</Link></Li>
          <Li><Link to="/create">Create</Link></Li>
          <Li><Link to="/register">Registrarse</Link></Li>
          <Li><Link to="/ofertas">Ofertas</Link></Li>
        </Ul>
      </Nav>
      <Content>
        {children}
      </Content>
    </LayoutContainer>
  );
};

export default Layout;


