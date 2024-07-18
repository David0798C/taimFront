import { useState } from "react";
import {
  LoginContainer,
  LoginStyle,
  Input,
  Button,
  Enlace,
  Parrafo,
} from "../styledComponents/StyledLogin.js";

import { loginUser } from "../services/auth.js";
import { useUserContext } from '../providers/UserProvider.jsx';
import { useNavigate } from "react-router-dom";
import {GlobalStyle} from "../styledComponents/StyledHomePages.js";

const Login = () => {
  const [nombre, setNombre] = useState();
  const [password, setPassword] = useState();
  const [,setUser] = useUserContext();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const loginUsuario = () => {
    loginUser(nombre, password).then((res) => {
      console.log(res);
      if (res.status == 200) {
        setUser(res.data);
        navigate("/user");
      } else {
        alert('Algo ha salido mal');
      }
    }).catch((err) => {
      setErrorMessage("Usuario y/o contraseña incorrectos.");
      console.error('Error al iniciar sesión:', err);
    });
  };

  return (
    <div>
      <GlobalStyle />
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
          <Parrafo>{errorMessage}</Parrafo>
          <Button onClick={loginUsuario}>
            <Enlace to="">Login</Enlace>
          </Button>
          <p>Si no es estás Registrado, pulsa aquí.</p>
          <Button>
            <Enlace to="/register">Registrarse</Enlace>
          </Button>
        </LoginStyle>
      </LoginContainer>
    </div>
  );
};

export default Login;
