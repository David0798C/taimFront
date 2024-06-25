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
`;

// Estilos para los elementos de la lista de navegación
const Li = styled.li`
  margin: 0 15px;
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

