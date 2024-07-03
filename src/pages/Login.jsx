import { useState } from "react";
import {
  LoginContainer,
  LoginStyle,
  Input,
  Button,
  Enlace,
} from "../styledComponents/StyledLogin.js";

import { loginUser} from "../services/auth.js"

import {setAuth} from "../services/api.js"
import { useContext } from 'react';
import { MyContext } from '../MyContext.js';

const Login = () => {
  const [nombre, setNombre] = useState();
  const [password, setPassword] = useState();
  const { logged, setLogged } = useContext(MyContext);

  const loginUsuario = () => {
    loginUser(nombre, password).then((res) => {
      console.log(res)
      if (res.data.resp === "Login exitoso") {
        setAuth(nombre, password);
        setLogged(true);
      }
    });
  };

  return (
    <div>
      <LoginContainer>
        <h1>Login</h1>

        <LoginStyle>
          <Input
            type="text"
            placeholder="Username"
            onChange={(e) => setNombre(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={loginUsuario}>
            <Enlace to="">Login</Enlace>
          </Button>
        </LoginStyle>
      </LoginContainer>
    </div>
  );
};

export default Login;
