import { useState } from "react";
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
} from "../styledComponents/StyledOfertes";

const Ofertas = () => {
  const [Offer, setOffer] = useState();

  const saveOfert = () => {};
  return (
    <div>
      <ContainerOfertas>
        <H1>Ofertas</H1>

        <ContainerRow>
          <ContainerColumn>
            <H3>Nombre de la oferta</H3>
            <Image></Image>

            <H4>Nombre de la persona</H4>

            <P>Horas de la Oferta</P>

            <Button onClick={(e) => setOffer(e.target.value)}>
              Añadir la oferta
            </Button>
          </ContainerColumn>

          <ContainerColumn>
            <H3>Nombre de la oferta</H3>
            <Image></Image>

            <H4>Nombre de la persona</H4>

            <P>Horas de la Oferta</P>

            <Button>Añadir la oferta</Button>
          </ContainerColumn>

          <ContainerColumn>
            <H3>Nombre de la oferta</H3>
            <Image></Image>

            <H4>Nombre de la persona</H4>

            <P>Horas de la Oferta</P>

            <Button>Añadir la oferta</Button>
          </ContainerColumn>

          <ContainerColumn>
            <H3>Nombre de la oferta</H3>
            <Image></Image>

            <H4>Nombre de la persona</H4>

            <P>Horas de la Oferta</P>

            <Button>Añadir la oferta</Button>
          </ContainerColumn>
        </ContainerRow>

        <ContainerRow>
          <ContainerColumn>
            <H3>Nombre de la oferta</H3>
            <Image></Image>

            <H4>Nombre de la persona</H4>

            <P>Horas de la Oferta</P>

            <Button>Añadir la oferta</Button>
          </ContainerColumn>

          <ContainerColumn>
            <H3>Nombre de la oferta</H3>
            <Image></Image>

            <H4>Nombre de la persona</H4>

            <P>Horas de la Oferta</P>

            <Button>Añadir la oferta</Button>
          </ContainerColumn>

          <ContainerColumn>
            <H3>Nombre de la oferta</H3>
            <Image></Image>

            <H4>Nombre de la persona</H4>

            <P>Horas de la Oferta</P>

            <Button>Añadir la oferta</Button>
          </ContainerColumn>

          <ContainerColumn>
            <H3>Nombre de la oferta</H3>
            <Image></Image>

            <H4>Nombre de la persona</H4>

            <P>Horas de la Oferta</P>

            <Button>Añadir la oferta</Button>
          </ContainerColumn>
        </ContainerRow>
      </ContainerOfertas>
    </div>
  );
};

export default Ofertas;
