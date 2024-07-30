// src/styledComponents/StyledEditPage.js

import styled, { createGlobalStyle } from "styled-components";
import font from "../fonts/aukim/AukimLight.otf";

export const GlobalStyle = createGlobalStyle`
 @font-face {
    font-family: 'myFont';
    src: url(${font});
}

body {
    font-family: myFont;
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    position: relative;
    min-height: 100%;
}
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-evenly;
    margin-top: 3%;
    padding: 20px;
    min-height: 100vh;
  width: 100%; // Asegura que el contenedor ocupe el ancho completo

    @media (max-width: 768px) {
    display: block;
}
`;


export const CardContainer = styled.div`
    background-color: rgba(226, 226, 226, 0.95);
    width: 100%; // Asegura que el contenedor ocupe el ancho completo
    max-width: 600px;
    height:850px;
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    box-sizing: border-box;

.edit {
    position: absolute;
    top: 10px;
    right: 10px;
    color: black;
}

.edit:hover {
    transition: 0.2s;
    color: #4ad627;
}

.profile-image {
    border-radius: 50%;
    height: 6rem;
    width: 6rem;
}
.name-edit,
.username,
.email-edit,
.location-edit,
.description-edit {
    font-size: 1rem;
    font-weight: bold;
    margin: 0px;
}

.input {
    background-image: linear-gradient(#64e320, #64e320), 
    linear-gradient(#bfbfbf, #bfbfbf);
    border: 0 none;
    border-radius: 0;
    box-shadow: none;
    float: none;
    background-color: transparent;
    background-position: center bottom, center calc(100% - 1px);
    background-repeat: no-repeat;
    background-size: 0 2px, 100% 1px;
    padding: 0;
    margin-top: 10px;
    margin-bottom: 10px;

    color: #bfbfbf;
    min-height: 35px;
    display: initial;
    width: 100%;
    outline: none;
    font-size: 15px;
    font-family: myFont;
    &:focus {
    background-size: 100% 2px, 100% 1px;
    outline: 0 none;
    transition-duration: 0.3s;
    color: #525252;
    }
}
`;

export const CenteredContainer = styled.div`
    background-color: rgba(226, 226, 226, 0.95);
    width: 100%; // Asegura que el contenedor ocupe el ancho completo
    max-width: 600px;
    height:850px;
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;

h1 {
    text-align: center;
    margin-bottom: 1rem;
}

ul {
    width: 100%;
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
    display: flex;
    justify-content: center;
    padding: 0.5rem 0;
    }

    input {
    background-image: linear-gradient(#64e320, #64e320),
    linear-gradient(#bfbfbf, #bfbfbf);
    border: 0 none;
    border-radius: 0;
    box-shadow: none;
    float: none;
    background-color: transparent;
    background-position: center bottom, center calc(100% - 1px);
    background-repeat: no-repeat;
    background-size: 0 2px, 100% 1px;
    padding: 0;
    margin-top: 10px;
    margin-bottom: 10px;

    color: #bfbfbf;
    min-height: 35px;
    display: initial;
    width: 100%;
    outline: none;
    font-size: 15px;
    font-family: myFont;
    &:focus {
        background-size: 100% 2px, 100% 1px;
        outline: 0 none;
        transition-duration: 0.3s;
        color: #525252;
    }
}

    button {
    margin-left: 1rem;
    }
}

@media (max-width: 768px) {
    margin-top: 10px;
}
`;

export const SkillsContainer = styled(CenteredContainer)``;
export const InterestContainer = styled(CenteredContainer)``;

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

export const DeleteButton = styled.button`
    background-color: rgba(146, 26, 26, 379);
    border: none;
    color: white;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
`;

export const LogoutButtonContainer = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
`;
