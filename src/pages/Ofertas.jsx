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
import {GlobalStyle} from "../styledComponents/StyledHomePages.js";

const Ofertas = () => {
  const [Offer, setOffer] = useState([]);

  useEffect(() => {
    getTask().then((res) => {
      console.log(res.data);
      setOffer(res.data);
    });
  }, []);

  return (
    <div>
      <GlobalStyle />
      <ContainerOfertas>
        <H1>Ofertas</H1>

        <ContainerRow>
          {Offer?.map((oferta) => (
            <ContainerColumn key={oferta.id}>
              <H3>{oferta.title}</H3>

              <H4>
                {oferta?.name} {oferta?.surname}
              </H4>
              <Image></Image>

              <P>{oferta.description}</P>

              <P>{oferta.hours}</P>

              <Button>Añadir Oferta</Button>
            </ContainerColumn>
          ))}
        </ContainerRow>
      </ContainerOfertas>
    </div>
  );
};

export default Ofertas;
