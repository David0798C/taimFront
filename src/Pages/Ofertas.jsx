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

import { getTask } from "../services/task";

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
      <ContainerOfertas>
        <H1>Ofertas</H1>

        <ContainerRow>
          {Offer?.map((oferta) => (
            <ContainerColumn key={oferta.id}>
              <H3>{oferta.title}</H3>
              <Image></Image>

              <H4>
                {oferta.user?.name} {oferta.user?.surname}
              </H4>

              <P>{oferta?.description}</P>

              <Button>Añadir Oferta</Button>
            </ContainerColumn>
          ))}
        </ContainerRow>

        <ContainerRow></ContainerRow>
      </ContainerOfertas>
    </div>
  );
};

export default Ofertas;
