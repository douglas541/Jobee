import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header';
import ProfileImg from '../../components/ProfileImg'
import changeIcon from '../../assets/images/ChangeIcon.svg'
import ImageJobPoints from '../../assets/images/JobPoints.svg'
import PostComp from '../../components/PostComp'


import './styles.css'

function Profile() {
   const [postComps, setComps] = useState([{
      username: "Yuri Reis",
      numLike: "+17",
      content: "Uma breve descrição a respeito do Design responsivo para web. Técnicas para aumentar a produtividade na área.",
      url: "https://avatars.githubusercontent.com/YuriReiss"
   },
   {
      username: "Yuri Reis",
      numLike: "+14",
      content: "O que as empresas de Marketing buscam em novos profissionais. Saiba o que precisa ser feito para que você consiga seu primeiro emprego na área.",
      url: "https://avatars.githubusercontent.com/YuriReiss"
   },
   {
      username: "Yuri Reis",
      numLike: "+9",
      content: "7 dicas essenciais para o novo profissional de TI (extra: meus 3 palpites de frameworks para aprender em 2021)",
      url: "https://avatars.githubusercontent.com/YuriReiss"
   }]);

   const postList = postComps.map((Comps) => {
      return (
         <div key={Comps.content}>
            <PostComp
               username={Comps.username}
               numLike={Comps.numLike}
               content={Comps.content}
               url={Comps.url}
            />
         </div>
      );
   });

   return (
      <div id="userProfile-page">
         <Header
            url=""
            link="/social"
         />
         <div id="userProfile-page-container">
            <div id="userProfile-page-nav-container">
               <nav id="userProfile-page-nav">
                  <Link to="/profile"><b>Social</b></Link>
                  <Link to="#">Informações</Link>
               </nav>
            </div>

            <div id="userProfile-infosProfile-container">

               <div id="UserProfile-imgs-container">
                  <img id="change" src={changeIcon} />
                  <div id="imgProfile">
                     <ProfileImg
                        url="https://avatars0.githubusercontent.com/u/56011104?s=400&u=05c64bc97220f522589077a3d8f88439b908cf2c&v=4"
                        size="13"
                        link="#"
                     />
                  </div>
               </div>

               <div id="userProfile-name">
                  <label>Yuri Reis</label>
               </div>

               <div id="userProfile-jobPoints-container">

                  <div id="jb">
                     <img src={ImageJobPoints} />
                     <label >Job Points</label>
                  </div>

                  <div id="points">
                     <label>47</label>
                  </div>

               </div>

            </div>

            <div id="userProfile-posts-container">

               {postList}

            </div>
         </div>
      </div>
   );
}

export default Profile;