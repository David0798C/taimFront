import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import homeIcon from '../pic/logoLayout.png';
import { BsStar } from "react-icons/bs";

// Estilos para la navegación
const Nav = styled.nav`
  background-color: #fff;
  opacity: 0.8;
  margin-top: 5px;
  margin-bottom: 20px;
  font-family: Arial, Helvetica, sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

const Img = styled.img`
  width: 10%;
  height: auto;
  cursor: pointer;
  padding-left: 50px;
`;

// Estilos para la lista de navegación
const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
  width: 100%;
  position: relative;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    z-index: 1000;
  }
`;

// Estilos para los elementos de la lista de navegación
const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
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

// Estilos para el icono de hamburguesa
const HamburgerIcon = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  margin-left: auto;

  @media (max-width: 768px) {
    display: flex;
    margin-left: 10px; /* Ajusta el margen para empujar el icono más hacia la izquierda */
  }

  svg {
    padding-right: 50px;
    font-size: 25px;
  }
`;

// Contenedor para el layout
const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
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
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <LayoutContainer>
      <Nav>
        <Link to="/"><Img src={homeIcon} alt="Home" /></Link>
        <HamburgerIcon onClick={toggleMenu}>
          <BsStar />
        </HamburgerIcon>
        <Ul open={isOpen}>
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
