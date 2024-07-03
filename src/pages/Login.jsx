import { useState } from "react";
import {
  LoginContainer,
  LoginStyle,
  Input,
  Button,
  Enlace,
} from "../styledComponents/StyledLogin.js";

import { loginUser} from "../services/auth.js";

import { setAuth } from "../services/api.js";
import { useUserContext } from '../providers/UserProvider.jsx';

const Login = () => {
  const [nombre, setNombre] = useState();
  const [password, setPassword] = useState();
  const [setUser] = useUserContext();

  const loginUsuario = () => {
    loginUser(nombre, password).then((res) => {
      console.log(res);
      if (res.status == 200) {
        setAuth(nombre, password);
        setUser(res.data)
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
