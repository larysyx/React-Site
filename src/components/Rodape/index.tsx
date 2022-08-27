import React from "react";
import { BsFacebook, BsInstagram, BsPinterest, BsYoutube } from "react-icons/bs";
import * as S from "./styles";

const Rodape = () => {
  return (
    <S.Rodape>
      <div className="content">
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <BsInstagram />
        </a>
        <a href="https://pinterest.com" target="_blank" rel="noreferrer">
          <BsPinterest />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <BsFacebook />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <BsYoutube />
        </a>
      </div>
    </S.Rodape>
  );
};

export default Rodape;
