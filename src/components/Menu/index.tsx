import React from "react";
import logo from "assets/img/logo.png"
import * as S from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "hooks/authHook";
const Menu = () => {
  const { user, signOut } = useAuth()
  const navigate = useNavigate();
  async function logout() {
    await signOut()
    navigate('/login')
  }
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
