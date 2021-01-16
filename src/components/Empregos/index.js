import React from "react";
import Button from "../Button";
import ProfileImg from "../ProfileImg";
import ImageJobPoints from "../../assets/images/JobPoints.svg";

import "./styles.css";

function Emprego(props) {
  const {
    urlEmpresaImg,
    tituloEmprego,
    jobPoints,
    tipo,
    cargaHoraria,
    funcao,
    local
  } = props;

  return (
    <div id="container-emprego">
      <div id="imagem-empresa-emprego">
        <ProfileImg
          url={urlEmpresaImg}
          size="2"
          link="#"
          id="imagem-empresa-emprego-img"
        />
      </div>

      <div id="titulo-emprego">{tituloEmprego}</div>

      <div id="job-points">
        <img src={ImageJobPoints} alt="JobPoints" />
        <label>{jobPoints}</label>
      </div>

      <ul id="infos-emprego">
        <li>Tipo: {tipo}</li>
        <li>Carga Horária: {cargaHoraria}</li>
        <li>Função: {funcao}</li>
        <li>Local: {local}</li>
      </ul>

      <div id="button-detalhes">
        <Button
          color="green"
          label="Mais detalhes"
          link="#"
          buttonCallback=""
        />
      </div>
    </div>
  );
}

export default Emprego;
