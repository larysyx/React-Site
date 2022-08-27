import React from "react";
import logo from "assets/img/logo.png"
import * as S from "./styles";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <S.Cabecalho>
      <picture>
        <Link to="/">
          <img src={logo} alt="imagem logo"/>
        </Link>
      </picture>
      <nav>
        <ul>
          <li>
            <section>            
              <Link to="/login">Login</Link>
            </section>
          </li>
          <li>
            <Link to="/cadastrar">Cadastre-se</Link>
          </li>
        </ul>
      </nav>
    </S.Cabecalho>
  );
};

export default Menu;
