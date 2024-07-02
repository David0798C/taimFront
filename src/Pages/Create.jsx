import {
  ContainerCreate,
  H1,
  ContainerIzq,
  Input,
} from "../styledcomponents/StyledCreate";

const Create = () => {
  return (
    <div>
      <ContainerCreate>
        <H1>Crear Oferta</H1>

        <ContainerIzq>
          {/* Formulario de creación de oferta */}

          <Input placeholder="Nombre de la Oferta"></Input>
        </ContainerIzq>
      </ContainerCreate>
    </div>
  );
};

export default Create;
