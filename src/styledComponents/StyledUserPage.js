import styled, { createGlobalStyle } from "styled-components";
import font from "../fonts/aukim/AukimLight.otf";
import {Tab} from 'react-tabs';

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
  display: grid;
  margin-top:3%;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  padding: 20px;
  min-height: 100vh;
`;

export const LeftColumn = styled.div`
  display: flex;
  border-radius:5px;
  flex-direction: column;
  gap: 20px;
`;

export const RightColumn = styled.div`
  background-color: rgba(226, 226, 226, 0.79);
  padding: 20px;
  border-radius: 5px;
  box-sizing: border-box;
  height: 100%;
`;

export const CardContainer = styled.div`
  background-color: rgba(226, 226, 226, 0.95);
  max-width: 100%;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  display: flex;
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

  .name {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0px;
  }

  .name-edit {
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

  .username {
    margin: 0px;
    margin-top: 0.5rem;
    font-size: 1rem;
    font-weight: bold;
  }

  .email {
    margin-top: 2rem;
    font-size: 1rem;
    font-weight: bold;
  }
  .email-edit {
    margin-bottom: 0px;
    font-size: 1rem;
    font-weight: bold;
  }

  .location {
    font-size: 1rem;
    font-weight: bold;
  }

  .location-edit {
    margin-bottom: 0px;
    font-size: 1rem;
    font-weight: bold;
  }

  .description {
    font-size: 1rem;
    font-weight: bold;
  }

  .description-edit {
    margin-bottom: 0px;
    font-size: 1rem;
    font-weight: bold;
  }
`;
export const CenteredContainer = styled.div`
  background-color: rgba(226, 226, 226, 0.95);
  max-width: 100%;
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
`;

export const SkillsContainer = styled(CenteredContainer)``;

export const InterestContainer = styled(CenteredContainer)``;

export const TaskContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(226, 226, 226, 0.79);
  border-radius: 5px;
  padding: 20px;
  box-sizing: border-box;
`;

export const Task = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(226, 226, 226, 0.79);
  border-radius: 5px;
  padding: 20px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

export const H1 = styled.h1`
  text-align: center;
`;

export const TaskText = styled.p`
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  border: 2px solid black;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: transparent;
  color: black;
  font-family: myFont;

  &:hover {
    transition: 0.2s;
    border-color: #4ad627;
  }
`;

export const TaskButton = styled.button`
  margin-top: 20px;
  margin: auto;
  width: 150px;
  border-radius: 5px;
  padding: 10px;
  background-color: transparent;
  border: 2px solid black;
  color: black;
  display: block;
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
background-color:rgba(146, 26, 26, 379); 
border-radius:5px
`;

export const LogoutButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
`;

export const CustomTab = styled(Tab)`
display: flex;
justify-content:center;
margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  border: 2px solid black;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: transparent;
  color: black;
  font-family: myFont;

  &:hover {
    transition: 0.2s;
    border-color: #4ad627;
  }
`;