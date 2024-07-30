import { useEffect, useState } from "react";
import {
  ContainerOfertas,
  ContainerRow,
  ContainerColumn,
  H3,
  H4,
  P,
  Image,
  Button,
} from "../styledComponents/StyledOfertes.js";

import { getTask } from "../services/task.js";
import { GlobalStyle } from "../styledComponents/StyledHomePages.js";
import { useUserContext } from "../providers/UserProvider.jsx";
import { postRequest } from "../services/request.js";
import Swal from "sweetalert2";

import Artistico from "../../src/pic/Artistico.png";

import Cuidados from "../../src/pic/Cuidados.png";

import Salud from "../../src/pic/Salud y Bienestar.png";

import Servicios from "../../src/pic/Servicios.png";

import Educacion from "../../src/pic/Educación.png";

import Transporte from "../../src/pic/Transporte.png";

const Ofertas = () => {
  const [Offer, setOffer] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga
  const [status] = useState(0);
  const [user, , , addSubscriptionToUser] = useUserContext();

  useEffect(() => {
    getTask()
      .then((res) => {
        // console.log(res.data);
        setOffer(res.data);
        setLoading(false); // Datos cargados, esconder indicador de carga
      })
      .catch((error) => {
        console.error(error);
        setLoading(false); // En caso de error, esconder indicador de carga
      });
  }, []);

  const enviarRequest = (task_id, offer) => {
    console.log(status, task_id);
    const obj = { status, taskId: task_id, userId: user.id };
    console.log("zzzzzzzzzzzzzzzzzz", obj);
    postRequest(obj)
      .then((res) => {
        console.log(res);
        addSubscriptionToUser(offer);
        Swal.fire({
          title: "Has añadido esta oferta correctamente",
          color: "#black",
          icon: "success",
          showConfirmButton: true,
          confirmButtonColor: "#4ad627",
        });
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          title: "Ocurrió un error al añadir la oferta",
          icon: "error",
          showConfirmButton: true,
          confirmButtonColor: "#4ad627",
        });
      });
  };

  const imagen = (categoria) => {
    if (categoria === "Arte") {
      return <img src={Artistico}></img>;
    } else if (categoria === "Cuidados") {
      console.log("ABUGAA CUIDADOOOS")
      return <img src={Cuidados}></img>;
    } else if (categoria === "Educacion") {
      return <img src={Educacion}></img>;
    } else if (categoria === "Salud y Bienestar") {
      return <img src={Salud}></img>;
    } else if (categoria === "Transporte") {
      return <img src={Transporte}></img>;
    } else if (categoria === "Servicios") {
      return <img src={Servicios}></img>;
    }
  };

  return (
    <div>
      <GlobalStyle />
      <ContainerOfertas>
        {loading ? ( // Mostrar indicador de carga mientras loading sea true
          <div>Cargando...</div>
        ) : (
          <ContainerRow>
            {Offer?.map((oferta) => (
              <ContainerColumn key={oferta.id}>
                <H3>{oferta?.title}</H3>
                <H4>{oferta?.user?.name}</H4>
                {imagen(oferta?.category)}
                <P>{oferta?.description}</P>
                <P>{oferta?.hours}</P>
                <Button onClick={() => enviarRequest(oferta.id, oferta)}>
                  Añadir Oferta
                </Button>
              </ContainerColumn>
            ))}
          </ContainerRow>
        )}
      </ContainerOfertas>
    </div>
  );
};

export default Ofertas;
