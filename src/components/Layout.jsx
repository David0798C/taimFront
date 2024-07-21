import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BsStar } from "react-icons/bs";
import gifAnimado from '../pic/gitAnimado.gif';
import gifEstatico from '../pic/gitEstatico.png';
import {createGlobalStyle} from 'styled-components';
import font from '../fonts/aukim/AukimLight.otf';
import BackgroundImage from '../pic/fondo4.jpg';

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: myFont;
        font-size: 1.5rem;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        position: relative;
        min-height: 100vh;
    }

    @font-face {
        font-family: myFont;
        src: url(${font});
        color: black;
    }

    body::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(${BackgroundImage});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        opacity: 0.2;
        z-index: -1;
    }
`;

// Contenedor principal
const Container = styled.div`
  display: flex;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
`;

// Estilos para NavIcon
const NavIcon = styled.div`
  background-color: #fff;
  opacity: 0.8;
  font-family: Arial, Helvetica, sans-serif;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 10px;
`;

// Estilos para Nav
const Nav = styled.nav`
  background-color: #fff;
  opacity: 0.8;
  font-family: Arial, Helvetica, sans-serif;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 10px;
`;

// Estilos para la imagen del icono
const Img = styled.img`
  width: 30%;
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
  font-family: myFont;
  
  @font-face {
        font-family: myFont;
        src: url(${font});
        color: black;
    }

  @media (max-width: 768px) {
    margin: 10px 0;
  }

  a {
    text-decoration: none;
    color: #000;
    font-size: 22px;
    padding: 10px 20px;
    border-radius: 8px;
    border: 2px solid white;
    background-color: transparent;
    margin-left: 40px;

    &:hover {
        transition: 0.2s;
        border-color: #4ad627;
}
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
    margin-left: 10px;
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
 // max-width: 1200px;
 // padding: 20px;
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
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    if (!isAnimating) {
      setIsHovered(true);
      setIsAnimating(true);
      setTimeout(() => {
        setIsHovered(false);
        setIsAnimating(false);
      }, 2000);
    }
  };

  return (
    
    <LayoutContainer>
      <GlobalStyle />
      <Container>
        <NavIcon onMouseEnter={handleMouseEnter}>
          <Link to="/"><Img src={isHovered ? gifAnimado : gifEstatico} alt="Home" /></Link>
        </NavIcon>
        <Nav>
          <HamburgerIcon onClick={toggleMenu}>
            <BsStar />
          </HamburgerIcon>
          <Ul open={isOpen}>
            <Li><Link to="/ofertas">Ofertas</Link></Li>
            <Li><Link to="/create">Create</Link></Li>
            <Li><Link to="/user">User</Link></Li>
          </Ul>
        </Nav>
      </Container>
      <Content>
        {children}
      </Content>
    </LayoutContainer>
  );
};

export default Layout;

