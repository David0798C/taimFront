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
import { useUserContext } from "../providers/UserProvider.jsx";
import { useNavigate } from "react-router-dom";
import { GlobalStyle } from "../styledComponents/StyledHomePages.js";
import Swal from "sweetalert2";

const Login = () => {
  const [nombre, setNombre] = useState();
  const [password, setPassword] = useState();
  const [, setUser] = useUserContext();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const loginUsuario = () => {
    loginUser(nombre, password)
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          setUser(res.data);
          navigate("/user");
        } else {
          Swal.fire({
            title: "Algo ha salido mal",

            icon: "error",
            showConfirmButton: true,
            confirmButtonColor: "#4ad627",
          });
        }
      })
      .catch((err) => {
        setErrorMessage("Usuario y/o contraseña incorrectos.");
        console.error("Error al iniciar sesión:", err);
      });
  };

  return (
    <div>
      <GlobalStyle />
      <LoginContainer>
        <h1 className="titulo">Login</h1>
        <LoginStyle>
          <Input
            type="text"
            placeholder="Usuario"
            onChange={(e) => setNombre(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Contraseña"
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
