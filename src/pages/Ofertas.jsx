import { useEffect, useState } from "react";
import {
  ContainerOfertas,
  ContainerRow,
  ContainerColumn,
  H3,
  H1,
  H4,
  P,
  Image,
  Button,
} from "../styledComponents/StyledOfertes.js";

import { getTask } from "../services/task.js";
import { GlobalStyle } from "../styledComponents/StyledHomePages.js";
import { useUserContext } from "../providers/UserProvider.jsx";
import { postRequest } from "../services/request.js";

const Ofertas = () => {
  const [Offer, setOffer] = useState([]);
  const [status, setStatus] = useState(0);
  const [user_id, setUser_id] = useState();
  const [user] = useUserContext();

  useEffect(() => {
    getTask().then((res) => {
      console.log(res.data);
      setOffer(res.data);
    });
  }, []);

  console.log(
    Offer.map((oferta) => oferta?.user.map((username) => username.name))
  );

  const enviarRequest = (task_id) => {
    console.log(status, task_id, user_id);
    const obj = { status, taskId: task_id, userId: user.id };
    console.log("zzzzzzzzzzzzzzzzzz", obj);
    postRequest(obj).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <GlobalStyle />
      <ContainerOfertas>
        <H1>Ofertas</H1>

        <ContainerRow>
          {Offer?.map((oferta) => (
            <ContainerColumn key={oferta.id}>
              <H3>{oferta?.title}</H3>

              <Image></Image>

              <P>{oferta?.description}</P>

              <P>{oferta?.hours}</P>

              <Button onClick={() => enviarRequest(oferta.id)}>
                Añadir Oferta
              </Button>
            </ContainerColumn>
          ))}
        </ContainerRow>
      </ContainerOfertas>
    </div>
  );
};

export default Ofertas;
