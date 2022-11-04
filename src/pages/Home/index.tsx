import React, { useEffect, useState } from "react";
import imgprincipal from "assets/img/imgprincipal.png";
import * as S from "./styles";
import { CardComponent } from "components";
import { IReceitaData } from "interfaces/receitas.interface";
import { apiReceitas } from "services/data";

const Home = () => {
  const [dados, setdados] = useState<IReceitaData[]>()
  useEffect(() => {
    const fetchData = async () => {
      const response = await apiReceitas.index()
      setdados(response.data)
    }
    fetchData()
  }, [])
  return (
    <S.Home>
      <picture>
        <img src={imgprincipal} alt="Imagens principais" />
      </picture>
      <aside>
        {dados && dados.map((item) => <CardComponent dados={item} />)}
      </aside>
    </S.Home>
  );
};

export default Home;
