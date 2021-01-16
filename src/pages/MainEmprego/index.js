import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Empregos from "../../components/Empregos";

import "./styles.css";

function MainSocial() {
  return (
    <div id="main-emprego-page">
      <Header url="https://avatars.githubusercontent.com/YuriReiss" />

      <div id="main-emprego-page-container">
        <div id="main-emprego-page-nav-container">
          <nav id="main-emprego-page-nav">
            <Link to="/MainSocial">Social</Link>
            <Link to="#">
              <b>Empregos</b>
            </Link>
            <Link to="/MainRank">Rank</Link>
          </nav>
        </div>

        <div id="main-emprego-post-container">
          <Empregos
            urlEmpresaImg="https://images-ext-2.discordapp.net/external/XGonQuworAno1zX3FJ2LxnthB2FvD_aV3L29tuuk8LE/https/img.ibxk.com.br/2014/11/programas/72687749.png?width=458&height=458"
            tituloEmprego="Desenvolvedor"
            jobPoints="50"
            tipo="Estágio"
            cargaHoraria="40hrs semanais"
            funcao="Desenvolvedor web"
            local="Goiânia"
          />

          <Empregos
            urlEmpresaImg="https://www.marketplace.org/wp-content/uploads/2019/07/ama2.png?w=768"
            tituloEmprego="Design Gráfico"
            jobPoints="90"
            tipo="Voluntariado"
            cargaHoraria="20hrs semanais"
            funcao="User Interface"
            local="Goiânia"
          />
        </div>
      </div>
    </div>
  );
}

export default MainSocial;
