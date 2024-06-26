import {
  RegisterContainer,
  Input,
  InputContainer,
} from "../StyledComponents/StyledRegister";

const Register = () => {
  return (
    <div>
      <RegisterContainer>
        <h1>Register</h1>

        <InputContainer>
          <Input type="text" placeholder="First Name" />

          <Input type="text" placeholder="Last Name" />

          <Input type="text" placeholder="Username" />

          <Input type="text" placeholder="Email" />

          <Input type="text" placeholder="Password" />

          <Input type="text" placeholder="Confirm Password" />

          <button type="submit">Register</button>
        </InputContainer>
      </RegisterContainer>
    </div>
  );
};

export default Register;
