import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Empregos from "../../components/Empregos";

import "./styles.css";

function MainSocial() {
  const [empregoComps, setEmpregoComps] = useState([
    {
      urlEmpresaImg: "https://images-ext-2.discordapp.net/external/XGonQuworAno1zX3FJ2LxnthB2FvD_aV3L29tuuk8LE/https/img.ibxk.com.br/2014/11/programas/72687749.png?width=458&height=458",
      tituloEmprego: "Desenvolvedor",
      jobPoints: "50",
      tipo: "Estágio",
      cargaHoraria: "40hrs semanais",
      funcao: "Desenvolvedor web",
      local: "Goiânia",
      id: "1234670898"
    },
    {
      urlEmpresaImg: "https://www.marketplace.org/wp-content/uploads/2019/07/ama2.png?w=768",
      tituloEmprego: "Design Gráfico",
      jobPoints: "90",
      tipo: "Voluntariado",
      cargaHoraria: "20hrs semanais",
      funcao: "User Interface",
      local: "Goiânia",
      id: "1912870890"
    }
  ]);

  const empregoList = empregoComps.map((emprego) => {
    return (
      <Empregos
        urlEmpresaImg={emprego.urlEmpresaImg}
        tituloEmprego={emprego.tituloEmprego}
        jobPoints={emprego.jobPoints}
        tipo={emprego.tipo}
        cargaHoraria={emprego.cargaHoraria}
        funcao={emprego.funcao}
        local={emprego.local}
        key={emprego.id}
      />
    )
  });

  return (
    <div id="main-emprego-page">
      <Header
        url="https://avatars.githubusercontent.com/YuriReiss"
        link="/profile"
      />

      <div id="main-emprego-page-container">
        <div id="main-emprego-page-nav-container">
          <nav id="main-emprego-page-nav">
            <Link to="/social">Social</Link>
            <Link to="#">
              <b>Empregos</b>
            </Link>
            <Link to="/rank">Rank</Link>
          </nav>
        </div>

        <div id="main-emprego-post-container">

          {empregoList}

        </div>
      </div>
    </div>
  );
}

export default MainSocial;
