import { useState } from "react";
import {
  RegisterContainer,
  Input,
  InputContainer,
  Button,
} from "../styledComponents/StyledRegister.js";

import { insertUser } from "../services/auth.js";
import {GlobalStyle} from '../styledComponents/StyledRegister';

const Register = () => {
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();

  const ConfirmPassword = () => {
    if (password === password2) {
      insertUser({ name, surname, username, email, password }).then((res) => {
        console.log(res)
        alert("Usuario registrado correctamente");
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
