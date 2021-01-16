import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import PostComp from '../../components/PostComp'

import './styles.css'

function Main() {
   return (
      <div>
         <div id="main-page">
            <Header
               url="https://avatars.githubusercontent.com/YuriReiss"
            />

            <div id="main-page-container">

               <div id="main-page-nav-container">
                  <nav id="main-page-nav">
                     <Link to="#"><b>Social</b></Link>
                     <Link to="/MainEmprego">Empregos</Link>
                     <Link to="/MainRank">Rank</Link>
                  </nav>
               </div>

               <div id="main-post-container">

                  <PostComp
                     username="Yuri Reis"
                     numLike="+17"
                     content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                     url="https://avatars.githubusercontent.com/YuriReiss"
                  />

                  <PostComp
                     username="Yuri Reis"
                     numLike="+17"
                     content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                     url="https://avatars.githubusercontent.com/YuriReiss"
                  />

                  <PostComp
                     username="Yuri Reis"
                     numLike="+17"
                     content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                     url="https://avatars.githubusercontent.com/YuriReiss"
                  />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Main;