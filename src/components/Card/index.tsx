import React from "react";
import { ICard } from "interfaces/card.interface";

import * as S from "./styles";

const Card = ({ dados }: ICard) => {
  return (
    <S.Card>
      {dados && (
        <div key={dados.id}>
          <section>
            <h2>{dados.titulo}</h2>
            <h4>{dados.receita}</h4>
            <h4>{dados.tipo}</h4>
          </section>
        </div>
      )}
    </S.Card>
  );
};

export default Card;
