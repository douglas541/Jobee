import React from 'react'
import Header from '../../components/Header';
import ProfileImg from '../../components/ProfileImg'
import changeIcon from '../../assets/images/ChangeIcon.svg'
import ImageJobPoints from '../../assets/images/JobPoints.svg'
import PostComp from '../../components/PostComp'

function UserProfile(){
   
   return(
      <div id="userProfile">
         <Header 
            url = "https://avatars0.githubusercontent.com/u/56011104?s=400&u=05c64bc97220f522589077a3d8f88439b908cf2c&v=4"
         />

         <div id="infos-profile">
            <img id="change" src={changeIcon} />

            <ProfileImg 
               url = "https://avatars0.githubusercontent.com/u/56011104?s=400&u=05c64bc97220f522589077a3d8f88439b908cf2c&v=4"
               size = "13"
               link = "#"
            />
               

            <div id="job-points">
               <div id="img-u">
                  <img  src={ ImageJobPoints }/>
               </div>
               
               <div id="jb-u">
                  <label >Job Points</label>
              
               </div>
               
               <div id="pontos-u">
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