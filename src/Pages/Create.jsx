import {
  ContainerCreate,
  H1,
  ContainerInput,
  Input,
  InputNumber,
} from "../StyledComponents/StyledCreate";

const Create = () => {
  return (
    <div>
      <ContainerCreate>
        <H1>Crear Oferta</H1>

        <ContainerInput>
          <Input placeholder="Nombre de la Oferta"></Input>

          <InputNumber type="number"></InputNumber>
        </ContainerInput>
      </ContainerCreate>
    </div>
  );
};

export default Create;
