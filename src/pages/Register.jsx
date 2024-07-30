import { useState } from "react";
import {
  RegisterContainer,
  Input,
  InputContainer,
  Button,
} from "../styledComponents/StyledRegister.js";
import { insertUser, loginUser } from "../services/auth.js";
import { useUserContext } from "../providers/UserProvider.jsx";
import { useNavigate } from "react-router-dom";
import { GlobalStyle } from "../styledComponents/StyledHomePages.js";

import Swal from "sweetalert2";

const Register = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [, setUser] = useUserContext();
  const navigate = useNavigate();

  const ConfirmPassword = () => {
    if (password === password2) {
      insertUser({ name, surname, username, email, password })
        .then((res) => {
          console.log(res);
          Swal.fire({
            title: "Usuario registrado correctamente",
            icon: "success",
            showConfirmButton: true,
            confirmButtonColor: "#4ad627",
          });

          // Realiza login después del registro
          loginUser(username, password)
            .then((loginRes) => {
              console.log(loginRes);
              if (loginRes.status === 200) {
                setUser(loginRes.data);
                navigate("/user"); // Redirecciona a la página de usuario
              } else {
                Swal.fire({
                  title: "Algo ha salido mal durante el login",
                  icon: "error",
                  showConfirmButton: true,
                  confirmButtonColor: "#4ad627",
                });
              }
            })
            .catch((loginErr) => {
              console.error("Error en el login:", loginErr);
              Swal.fire({
                title: "Error en el login",
                icon: "error",
                showConfirmButton: true,
                confirmButtonColor: "#4ad627",
              });
            });
        })
        .catch((err) => {
          console.error("Error en el registro:", err);
          Swal.fire({
            title: "Error en el registro",
            icon: "error",
            showConfirmButton: true,
            confirmButtonColor: "#4ad627",
          });
        });
    } else {
      Swal.fire({
        title: "Las contraseñas no coinciden",
        icon: "error",
        showConfirmButton: true,
        confirmButtonColor: "#4ad627",
      });
    }
  };

  return (
    <div>
      <GlobalStyle />
      <RegisterContainer>
        <h1>Registrarse</h1>

        <InputContainer>
          <Input
            type="text"
            placeholder="Nombre"
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            type="text"
            placeholder="Apellido"
            onChange={(e) => setSurname(e.target.value)}
          />

          <Input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="text"
            placeholder="Usuario"
            onChange={(e) => setUsername(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Confirmar Contraseña"
            onChange={(e) => setPassword2(e.target.value)}
          />

          <Button type="button" onClick={ConfirmPassword}>
            Registrarse
          </Button>
        </InputContainer>
      </RegisterContainer>
    </div>
  );
};

export default Register;
