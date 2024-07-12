import { useState } from "react";
import {
  RegisterContainer,
  Input,
  InputContainer,
  Button,
} from "../styledComponents/StyledRegister.js";
import { insertUser, loginUser } from "../services/auth.js"; 
import { useUserContext } from '../providers/UserProvider.jsx'; 
import { useNavigate } from "react-router-dom"; 
import { GlobalStyle } from "../styledComponents/StyledHomePages.js";

const Register = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [, setUser] = useUserContext();
  const navigate = useNavigate();

  const ConfirmPassword = () => {
    if (password === password2) {
      insertUser({ name, surname, username, email, password }).then((res) => {
        console.log(res);
        alert("Usuario registrado correctamente");

        // Realiza login después del registro
        loginUser(username, password).then((loginRes) => {
          console.log(loginRes);
          if (loginRes.status === 200) {
            setUser(loginRes.data);
            navigate("/user"); // Redirecciona a la página de usuario
          } else {
            alert('Algo ha salido mal durante el login');
          }
        }).catch((loginErr) => {
          console.error("Error en el login:", loginErr);
          alert("Error en el login");
        });

      }).catch((err) => {
        console.error("Error en el registro:", err);
        alert("Error en el registro");
      });
    } else {
      alert("Las contraseñas no coinciden");
    }
  };

  return (
    <div>
      <GlobalStyle />
      <RegisterContainer>
        <h1>Register</h1>

        <InputContainer>
          <Input
            type="text"
            placeholder="First Name"
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            type="text"
            placeholder="Last Name"
            onChange={(e) => setSurname(e.target.value)}
          />

          <Input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setPassword2(e.target.value)}
          />

          <Button type="button" onClick={ConfirmPassword}>
            Register
          </Button>
        </InputContainer>
      </RegisterContainer>
    </div>
  );
};

export default Register;

