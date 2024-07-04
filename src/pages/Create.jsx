import { useState, useEffect } from "react";
import {
  ContainerCreate,
  H1,
  ContainerInput,
  Input,
  InputNumber,
  Button,
} from "../styledComponents/StyledCreate";
import { createTask } from "../services/task";
import { useUserContext } from "../providers/UserProvider";

const Create = () => {
  const [title, setOfferTitle] = useState();

  const [description, setOfferDesc] = useState();

  const [category, setOfferCat] = useState();

  const [location, setOfferLoc] = useState();

  const [date, setOfferDate] = useState();

  const [hours, setOfferTime] = useState();
  const [user] = useUserContext();

  // const [setUserId] = useState();

  const handleClickCrear = async () => {
    await createTask({
      title,
      description,
      category,
      location,
      date,
      hours,
      user: {
        id: user.id,
      },
    });

    alert("Has creado una oferta");
  };

  return (
    <div>
      <ContainerCreate>
        <H1>Crear Oferta</H1>

        <ContainerInput>
          <Input
            placeholder="Nombre de la Oferta"
            onChange={(e) => setOfferTitle(e.target.value)}
          ></Input>

          <Input
            placeholder="Breve descripcion "
            onChange={(e) => setOfferDesc(e.target.value)}
          ></Input>

          <Input
            placeholder="Categoria de la oferta"
            onChange={(e) => setOfferCat(e.target.value)}
          ></Input>

          <Input
            placeholder="Localizacion"
            onChange={(e) => setOfferLoc(e.target.value)}
          ></Input>

          <Input
            type="date"
            placeholder="Fecha de la Oferta"
            onChange={(e) => setOfferDate(e.target.value)}
          ></Input>

          <InputNumber
            type="number"
            placeholder="Horas de la oferta"
            onChange={(e) => setOfferTime(e.target.value)}
          ></InputNumber>
        </ContainerInput>
        <Button onClick={handleClickCrear}>Crear Oferta</Button>
      </ContainerCreate>
    </div>
  );
};

export default Create;
