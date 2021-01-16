import React from 'react'
import Header from '../../components/Header';
import ProfileImg from '../../components/ProfileImg'
import changeIcon from '../../assets/images/ChangeIcon.svg'
import ImageJobPoints from '../../assets/images/JobPoints.svg'
import PostComp from '../../components/PostComp'


import './styles.css'

function UserProfile(){
   
   return(
      <div id="userProfile">
         <Header 
            url = "https://avatars0.githubusercontent.com/u/56011104?s=400&u=05c64bc97220f522589077a3d8f88439b908cf2c&v=4"
         />

         <div id="userProfile-page-nav-container">
            <nav id="userProfile-page-nav">
               <Link to="/MainSocial">Social</Link>
               <Link to="/MainEmprego">Empregos</Link>
               <Link to="#"><b>Rank</b></Link>
               </nav>
         </div>

         <div id="userProfile-infosProfile">

            <div id="imgProfile">
               <img id="change" src={changeIcon} />
               <ProfileImg 
                  url = "https://avatars0.githubusercontent.com/u/56011104?s=400&u=05c64bc97220f522589077a3d8f88439b908cf2c&v=4"
                  size = "13"
                  link = "#"
               />
            </div>
               
            <div id="userProfile-name">
               <label>Yuri Reis</label>
            </div>   

            <div id="userProfile-jobPoints">
         
               <div id="jb">
                  <img  src={ ImageJobPoints }/>
                  <label >Job Points</label>
               </div>
               
               <div id="points">
                  <label>47</label>
               </div>
              
            </div>

         </div>
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
   );
}

export default UserProfile;