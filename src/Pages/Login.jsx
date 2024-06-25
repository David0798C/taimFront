import { useState } from "react";
import {
  LoginContainer,
  LoginStyle,
  Input,
  Button,
  Enlace,
} from "../StyledComponents/StyledLogin";

const Login = () => {
  const [nombre, setNombre] = useState();

  const [password, setPassword] = useState();

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
            type="text"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button>
            <Enlace to="/Ofertas">Login</Enlace>
          </Button>
        </LoginStyle>
      </LoginContainer>
    </div>
  );
};

export default Login;
