import styled from 'styled-components';
import font from '../fonts/aukim/AukimLight.otf';

export const Container = styled.div`
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 100px;
`;


export const CardContainer = styled.div`
background-color: white;
  max-width: 34rem;
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
  font-family: myFont;
  
  @font-face {
        font-family: myFont;
        src: url(${font});
        color: black;
    }

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
  position: fixed;
  bottom: 20px;
  right: 20px;
`;

