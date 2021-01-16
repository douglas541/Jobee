import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header';
import ProfileImg from '../../components/ProfileImg'
import changeIcon from '../../assets/images/ChangeIcon.svg'
import ImageJobPoints from '../../assets/images/JobPoints.svg'
import PostComp from '../../components/PostComp'


import './styles.css'

function UserProfile(){
   
   return(
      <div id="userProfile-page">
         <Header 
            url = "https://avatars0.githubusercontent.com/u/56011104?s=400&u=05c64bc97220f522589077a3d8f88439b908cf2c&v=4"
         />
         <div id="userProfile-page-container">
            <div id="userProfile-page-nav-container">
               <nav id="userProfile-page-nav">
                  <Link to="/UserProfile">Social</Link>
                  <Link to="#">Informações</Link>
               </nav>
            </div>

            <div id="userProfile-infosProfile-container">

               <div id="UserProfile-imgs-container">
                  <img id="change" src={changeIcon} />
                  <div id="imgProfile">
                     <ProfileImg 
                        url = "https://avatars0.githubusercontent.com/u/56011104?s=400&u=05c64bc97220f522589077a3d8f88439b908cf2c&v=4"
                        size = "13"
                        link = "#"
                     />
                  </div>   
               </div>
               
               <div id="userProfile-name">
                  <label>Yuri Reis</label>
               </div>   

               <div id="userProfile-jobPoints-container">
         
                  <div id="jb">
                     <img  src={ ImageJobPoints }/>
                     <label >Job Points</label>
                  </div>
               
                  <div id="points">
                     <label>47</label>
                  </div>
              
               </div>

            </div>

            <div id="userProfile-posts-container">
               <PostComp 
                  username= "Yuri Reis"
                  numLike = "14"
                  content = "Queria dicas para conseguir o primeiro emprego."
               />

               <PostComp 
                  username= "Yuri Reis"
                  numLike = "5"
               content = "O que devo estudar sobre Desenvolvimento Web?"
               />

               <PostComp 
                  username= "Yuri Reis"
                  numLike = "60"
                  content = "segue link para curso de JavaScript: https://www.youtube.com/playlist?list=PLlrx"
               />
            </div>
         </div>
      </div>   
   );
}

export default UserProfile;