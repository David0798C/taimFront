import Select from "react-select";
import { useState } from "react";
import {
  ContainerCreate,
  ContainerInput,
  Input,
  Button,
} from "../styledComponents/StyledCreate";
import { createTask } from "../services/task";
import { useUserContext } from "../providers/UserProvider";
import { GlobalStyle } from "../styledComponents/StyledHomePages.js";
import {
  customStyles,
  customStyles2,
} from "../styledComponents/StyledSelect.js";
import Swal from "sweetalert2";

const Create = () => {
  const [title, setOfferTitle] = useState("");
  const [description, setOfferDesc] = useState("");
  const [category, setOfferCat] = useState("");
  const [location, setOfferLoc] = useState("");
  const [date, setOfferDate] = useState("");
  const [hours, setOfferTime] = useState([]);
  const [user, , , , addOfferToUser] = useUserContext();

  const horas = [
    { value: "30min", label: "30min" },
    { value: "45min", label: "45min" },
    { value: "1h", label: "1h" },
    { value: "1:30h", label: "1:30h" },
    { value: "2h", label: "2H" },
    { value: "2:30h", label: "2:30h" },
    { value: "3h", label: "3h" },
    { value: "3:30h", label: "3:30h" },
    { value: "4h", label: "4h" },
  ];

  const categories = [
    { value: "Arte", label: "Arte" },
    { value: "Cuidados", label: "Cuidados" },
    { value: "Educacion", label: "Educacion" },
    { value: "Salud y Bienestar", label: "Salud y Bienestar" },
    { value: "Servicios", label: "Servicios" },
    { value: "Transporte", label: "Transporte" },
  ];

  const handleClickCrear = async () => {
    const newOffer = {
      title,
      description,
      category,
      location,
      date,
      hours,
      user: { id: user.id },
    };

    await createTask(newOffer);
    addOfferToUser(newOffer);

    Swal.fire({
      title: "Has creado una oferta",
      icon: "success",
      showConfirmButton: true,
      confirmButtonColor: "#4ad627",
    });
  };

  return (
    <div>
      <GlobalStyle />
      <ContainerCreate>
        <ContainerInput>
          <Input
            placeholder="Nombre de la Oferta"
            onChange={(e) => setOfferTitle(e.target.value)}
          />
          <Input
            placeholder="Breve descripcion "
            onChange={(e) => setOfferDesc(e.target.value)}
          />
          {/* <Input
            placeholder="Categoria de la oferta"
            onChange={(e) => setOfferCat(e.target.value)}
          /> */}
          <Input
            placeholder="Localizacion"
            onChange={(e) => setOfferLoc(e.target.value)}
          />
          <Input
            type="date"
            placeholder="Fecha de la Oferta"
            onChange={(e) => setOfferDate(e.target.value)}
          />

          <Select
            onChange={({ value }) => setOfferCat(value)}
            options={categories}
            styles={customStyles2}
            placeholder="Categorias"
          />
          <Select
            placeholder="Horas"
            onChange={({ value }) => setOfferTime(value)}
            options={horas}
            styles={customStyles}
          />
          <Button onClick={handleClickCrear}>Crear Oferta</Button>
        </ContainerInput>
      </ContainerCreate>
    </div>
  );
};

export default Create;
