import { useState } from "react";
import {
  LoginContainer,
  LoginStyle,
  Input,
  Button,
  Enlace,
} from "../styledComponents/StyledLogin.js";

import { loginUser } from "../services/auth.js";

import { setAuth } from "../services/api.js";
import { useUserContext } from '../providers/UserProvider.jsx';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [nombre, setNombre] = useState();
  const [password, setPassword] = useState();
  const [setUser] = useUserContext();
  const navigate = useNavigate();

  const loginUsuario = () => {
    loginUser(nombre, password).then((res) => {
      console.log(res);
      if (res.status == 200) {
        setAuth(nombre, password);
        setUser(res.data)
        navigate("/user");
      }else {
          alert("No estas Registrado");
          navigate("/register");
          console.error('Error al iniciar sesión:', res.data.resp);
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
