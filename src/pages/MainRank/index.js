import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Rank from '../../components/Rank'

import './styles.css'

function MainRank() {
   
   const[corSubNav1, setCorSubNav1] = useState("600");
   const[corSubNav2, setCorSubNav2] = useState("500");
   const[corSubNav3, setCorSubNav3] = useState("500");

   const [rankComps, setRankComps] = useState([
      { content: "Desenvolvedor Web" },
      { content: "Engenheiro de Software" },
      { content: "UX Designer" },
      { content: "músico" },
      { content: "Publicitário" },
      { content: "Arquiteto" },
      { content: "Professor" },
      { content: "Dentista" },
      { content: "Advogado" },
      { content: "UI Designer" },
   ]);

   const rankList = rankComps.map((rank) => {
      return (
         <Rank
            key={rank.content}
            content={rank.content}
         />
      );
   });
   

   const listProfessions = () => {
      setRankComps([
         { content: "Desenvolvedor Web" },
         { content: "Engenheiro de Software" },
         { content: "UX Designer" },
         { content: "Músico" },
         { content: "Publicitário" },
         { content: "Arquiteto" },
         { content: "Professor" },
         { content: "Dentista" },
         { content: "Advogado" },
         { content: "UI Designer" },
      ]);
      
      setCorSubNav1("600");
      setCorSubNav2("500");
      setCorSubNav3("500");

   }

   const listHardSkills = () => {
      setRankComps([
         { content: "Gestão de projetos" },
         { content: "Mecânica de motores" },
         { content: "Programação" },
         { content: "Domínio de PHP" },
         { content: "Domínio de excel avançado" },
         { content: "Contabilidade" },
         { content: "Gestão de pessoas" },
         { content: "Inglês" },
         { content: "Operação de máquinas" },
         { content: "Espanhol" },
      ]);

      setCorSubNav1("500");
      setCorSubNav2("600");
      setCorSubNav3("500");
   }

   const listSoftSkills = () => {
      setRankComps([
         { content: "Negociação e Persuasão" },
         { content: "Inteligência Criativa" },
         { content: "Gestão de Pessoas" },
         { content: "Flexibilidade"},
         { content: "Pensamento Critico"},
         { content: "Liderança"},
         { content: "Resiliência" },
         { content: "Proatividade" },
         { content: "Comunicação" },
         { content: "Persuação" },
      ]);

      
      setCorSubNav1("500");
      setCorSubNav2("500");
      setCorSubNav3("600");

   }
   
   return (
      <div>
         <div id="main-rank-page">
            <Header
               url="https://avatars.githubusercontent.com/YuriReiss"
               link="/profile"
            />

            <div id="main-rank-page-container">

               <div id="main-rank-page-nav-container">
                  <nav id="main-rank-page-nav">
                     <Link to="/social">Social</Link>
                     <Link to="/empregos">Empregos</Link>
                     <Link to="#"><b>Rank</b></Link>
                  </nav>
               </div>

               <div id="main-rank-page-subnav-container">
                  <nav id="main-rank-page-subnav">
                     <a href="#" style={{fontWeight: corSubNav1}} id="profissoes" onClick= {listProfessions}>Profissões</a>
                     <a href="#" style={{fontWeight: corSubNav2}} id="hardskills" onClick= {listHardSkills}>Hard Skills</a>
                     <a href="#" style={{fontWeight: corSubNav3}} id="listskills" onClick= {listSoftSkills}>Soft Skills</a>
                  </nav>
               </div>
               <div id="main-rank-post-container">
                  {rankList}
               </div>
            </div>
         </div>
      </div>
   );

}

export default MainRank;