import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Rank from '../../components/Rank'

import './styles.css'

function MainRank() {
   return (
      <div>
         <div id="main-rank-page">
            <Header
               url="https://avatars.githubusercontent.com/YuriReiss"
            />

            <div id="main-rank-page-container">

               <div id="main-rank-page-nav-container">
                  <nav id="main-rank-page-nav">
                     <Link to="/MainSocial">Social</Link>
                     <Link to="/MainEmprego">Empregos</Link>
                     <Link to="#"><b>Rank</b></Link>
                  </nav>
               </div>

               <div id="main-rank-post-container">
                  <Rank
                     content="Desenvolvedor Web"
                  />
                  <Rank
                     content="Engenheiro de Software"
                  />
                  <Rank
                     content="Design UX"
                  />
                  <Rank
                     content="músico"
                  />
                  <Rank
                     content="Publicitário"
                  />
                  <Rank
                     content="Arquiteto"
                  />
                  <Rank
                     content="Professor"
                  />
                  <Rank
                     content="Dentista"
                  />
                  <Rank
                     content="Advogado"
                  />
                  <Rank
                     content="Design UI"
                  />
               </div>
            </div>
         </div>
      </div>
   );
}

export default MainRank;