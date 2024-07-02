import { useState } from "react";
import {
  LoginContainer,
  LoginStyle,
  Input,
  Button,
  Enlace,
} from "../styledComponents/StyledLogin.js";

import { loginUser, setAuth } from "../services/auth.js"

const Login = () => {
  const [nombre, setNombre] = useState();
  const [password, setPassword] = useState();


  const loginUsuario = () => {
    loginUser(nombre, password).then((res) => {
      console.log(res)
      if (res.data === "Login exitoso") {
        setAuth(nombre, password);
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
            <Enlace to="/Ofertas">Login</Enlace>
          </Button>
        </LoginStyle>
      </LoginContainer>
    </div>
  );
};

export default Login;
