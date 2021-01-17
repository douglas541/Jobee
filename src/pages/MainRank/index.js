import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Rank from '../../components/Rank'

import './styles.css'

function MainRank() {

   const [corSubNav1, setCorSubNav1] = useState("600");
   const [corSubNav2, setCorSubNav2] = useState("500");
   const [corSubNav3, setCorSubNav3] = useState("500");

   const [rankComps, setRankComps] = useState([
      {
         position: "1",
         area: "TI",
         topics: "131",
         content: "Desenvolvedor Web"
      },
      {
         position: "2",
         area: "Design",
         topics: "126",
         content: "UX Designer"
      },
      {
         position: "3",
         area: "Poublicidade e Propaganda",
         topics: "117",
         content: "Publicitário"
      },
      {
         position: "4",
         area: "Poublicidade e Propaganda",
         topics: "109",
         content: "Marketing Digital"
      },
      {
         position: "5",
         area: "Arquitetura e Urbanismo",
         topics: "102",
         content: "Projetista"
      },
      {
         position: "6",
         area: "Educação",
         topics: "96",
         content: "Professor Particular"
      },
      {
         position: "7",
         area: "Eletrônica",
         topics: "91",
         content: "Estagiário de Eletrônica"
      },
      {
         position: "8",
         area: "TI",
         content: "Engenheiro de Software",
         topics: "83"
      },
      {
         position: "9",
         area: "Música",
         topics: "76",
         content: "Professor de Música"
      },
      {
         position: "10",
         area: "Design",
         topics: "73",
         content: "UI Designer"
      },
   ]);

   const rankList = rankComps.map((rank) => {
      return (
         <Rank
            key={rank.position}
            position={rank.position}
            area={rank.area}
            content={rank.content}
            topics={rank.topics}
         />
      );
   });


   const listProfessions = () => {
      setRankComps([
         {
            position: "1",
            area: "TI",
            topics: "131",
            content: "Desenvolvedor Web"
         },
         {
            position: "2",
            area: "Design",
            topics: "126",
            content: "UX Designer"
         },
         {
            position: "3",
            area: "Poublicidade e Propaganda",
            topics: "117",
            content: "Publicitário"
         },
         {
            position: "4",
            area: "Poublicidade e Propaganda",
            topics: "109",
            content: "Marketing Digital"
         },
         {
            position: "5",
            area: "Arquitetura e Urbanismo",
            topics: "102",
            content: "Projetista"
         },
         {
            position: "6",
            area: "Educação",
            topics: "96",
            content: "Professor Particular"
         },
         {
            position: "7",
            area: "Eletrônica",
            topics: "91",
            content: "Estagiário de Eletrônica"
         },
         {
            position: "8",
            area: "TI",
            content: "Engenheiro de Software",
            topics: "83"
         },
         {
            position: "9",
            area: "Música",
            topics: "76",
            content: "Professor de Música"
         },
         {
            position: "10",
            area: "Design",
            topics: "73",
            content: "UI Designer"
         },
      ]);

      setCorSubNav1("600");
      setCorSubNav2("500");
      setCorSubNav3("500");

   }

   const listHardSkills = () => {
      setRankComps([
         {
            position: "1",
            area: "TI",
            topics: "131",
            content: "Gestão de projetos"
         },
         {
            position: "2",
            area: "Mecânica",
            topics: "126",
            content: "Mecânica de motores"
         },
         {
            position: "3",
            area: "TI",
            topics: "117",
            content: "Programação"
         },
         {
            position: "4",
            area: "TI",
            topics: "109",
            content: "Domínio de PHP"
         },
         {
            position: "5",
            area: "Tecnologia em Informática",
            topics: "102",
            content: "Domínio de excel avançado"
         },
         {
            position: "6",
            area: "Contabilidade",
            topics: "96",
            content: "Contabilidade"
         },
         {
            position: "7",
            area: "Administração",
            topics: "91",
            content: "Gestão de pessoas"
         },
         {
            position: "8",
            area: "Linguagens",
            content: "Inglês",
            topics: "83"
         },
         {
            position: "9",
            area: "Mecânica",
            topics: "76",
            content: "Operação de máquinas"
         },
         {
            position: "10",
            area: "Linguagens",
            topics: "73",
            content: "Espanhol"
         },
      ]);

      setCorSubNav1("500");
      setCorSubNav2("600");
      setCorSubNav3("500");
   }

   const listSoftSkills = () => {
      setRankComps([
         {
            position: "1",
            area: "Soft Skill",
            topics: "131",
            content: "Negociação e Persuasão"
         },
         {
            position: "2",
            area: "Soft Skill",
            topics: "126",
            content: "Inteligência Criativa"
         },
         {
            position: "3",
            area: "Soft Skill",
            topics: "117",
            content: "Gestão de Pessoas"
         },
         {
            position: "4",
            area: "Soft Skill",
            topics: "109",
            content: "Flexibilidade"
         },
         {
            position: "5",
            area: "Soft Skill",
            topics: "102",
            content: "Pensamento Critico"
         },
         {
            position: "6",
            area: "Soft Skill",
            topics: "96",
            content: "Resiliência"
         },
         {
            position: "7",
            area: "Soft Skill",
            topics: "91",
            content: "Proatividade"
         },
         {
            position: "8",
            area: "Soft Skill",
            content: "Comunicação",
            topics: "85"
         },
         {
            position: "9",
            area: "Soft Skill",
            topics: "76",
            content: "Persuação"
         }
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
                     <a href="#" style={{ fontWeight: corSubNav1 }} id="profissoes" onClick={listProfessions}>Profissões</a>
                     <a href="#" style={{ fontWeight: corSubNav2 }} id="hardskills" onClick={listHardSkills}>Hard Skills</a>
                     <a href="#" style={{ fontWeight: corSubNav3 }} id="listskills" onClick={listSoftSkills}>Soft Skills</a>
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