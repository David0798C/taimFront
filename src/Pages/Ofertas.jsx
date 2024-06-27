import React from "react";
import {
  ContainerOfertas,
  ContainerRow,
  ContainerColumn,
  H3,
} from "../StyledComponents/StyledOfertes";

const Ofertas = () => {
  return (
    <div>
      <ContainerOfertas>
        <h1>Ofertas</h1>

        <ContainerRow>
          <ContainerColumn>
            <H3>Nombre de la oferta</H3>
          </ContainerColumn>
        </ContainerRow>
      </ContainerOfertas>
    </div>
  );
};

export default Ofertas;
