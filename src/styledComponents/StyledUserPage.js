import styled from 'styled-components';
import BackgroundImage from '../pic/fondo2.jpg';
import {createGlobalStyle} from 'styled-components';
import font from '../fonts/aukim/AukimLight.otf';

export const GlobalStyle = createGlobalStyle`
	body {
        font-family: myFont;
        font-size: 1.5rem;
	}
    @font-face {
        font-family: myFont;
        src: url(${font});
    }
`;
export const Container = styled.div`
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 100px;
`;
export const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${BackgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.3; 
  z-index: -1; // Asegúrate de que el fondo esté detrás de los otros elementos
`;

export const CardContainer = styled.div`
background-color: white;
  max-width: 24rem;
  padding: 1.5rem;
  margin-bottom:1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 1rem;
  position: relative;

.edit{
    position: absolute;
    top: 10px; 
    right: 10px; 
    color: black;
  }

  .edit:hover{
    transition: 0.2s;
    color: #4ad627;
  }

  .profile-image {
    border-radius: 50%;
    height: 6rem;
    width: 6rem;
  }

  .name {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0px;
  }

  .username {
    margin: 0px;
    margin-top: 0.5rem;
    font-size: 1rem;
    font-weight: bold;
  }

  .email {
    margin-top: 2rem;
  }

`;
export const InterestContainer = styled.div`
background-color: white;
  max-width: 40rem;
  padding: 1.5rem;
  margin-bottom:1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 1rem;
  `;

export const SkillsContainer = styled.div`
background-color: white;
  max-width: 40rem;
  padding: 1.5rem;
  margin-bottom:1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 1rem;
  `;

export const Button = styled.button`
  width: 100px;
  border-radius: 5px;
  padding: 5px;
  background-color: transparent;
  border: 2px solid black;
  color: black;
  height: 40px;

  &:hover {
    transition: 0.2s;
    border-color: #4ad627;
  }
`;

export const GifContainer = styled.div`
  position: relative;
  width: 500px;
  height: auto;
  display: flex;
  align-items: end;
`;

export const Gif = styled.img`
  width: 100%;
  height: auto;
  display: flex;
  align-items: end;
  transition: 0.5s;
`;

export const LogoutButtonContainer = styled.div`
  position: absolute;
  top: 250px;
  right: 20px;
`;

