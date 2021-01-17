import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Rank from '../../components/Rank'

import './styles.css'

function MainRank() {
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

               <div id="main-rank-post-container">
                  {rankList}
               </div>
            </div>
         </div>
      </div>
   );
}

export default MainRank;