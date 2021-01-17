import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import PostComp from '../../components/PostComp'

import './styles.css'

function Main() {
   const [postComps, setComps] = useState([{
      username: "Yuri Reis",
      numLike: "+17",
      content: "Uma breve descrição a respeito do Design responsivo para web. Técnicas para aumentar a produtividade na área.",
      url: "https://avatars.githubusercontent.com/YuriReiss"
   },
   {
      username: "Douglas Sousa",
      numLike: "+14",
      content: "O que as empresas de Marketing buscam em novos profissionais. Saiba o que precisa ser feito para que você consiga seu primeiro emprego na área.",
      url: "https://avatars.githubusercontent.com/douglas541"
   },
   {
      username: "Isaac Brasil",
      numLike: "+9",
      content: "7 dicas essenciais para o novo profissional de TI (extra: meus 3 palpites de frameworks para aprender em 2021)",
      url: "https://avatars.githubusercontent.com/isaacbrasil"
   },
   {
      username: "Yuri Reis",
      numLike: "+9",
      content: "7 dicas essenciais para o novo profissional de TI (extra: meus 3 palpites de frameworks para aprender em 2021)",
      url: "https://avatars.githubusercontent.com/YuriReiss"
   },
   {
      username: "João Victor",
      numLike: "+9",
      content: "7 dicas essenciais para o novo profissional de TI (extra: meus 3 palpites de frameworks para aprender em 2021)",
      url: "https://instagram.fgyn3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/73387412_774779042984351_3504585325173276672_n.jpg?_nc_ht=instagram.fgyn3-1.fna.fbcdn.net&_nc_ohc=7JS_ZKW8UPMAX9ix-Rh&tp=1&oh=7a8580041c405bb07cd6d1c159b322b7&oe=602D4AB7"
   },
   {
      username: "Douglas Sousa",
      numLike: "+9",
      content: "7 dicas essenciais para o novo profissional de TI (extra: meus 3 palpites de frameworks para aprender em 2021)",
      url: "https://avatars.githubusercontent.com/douglas541"
   }]);

   const postList = postComps.map((Comps) => {
      return (
         <div key={Comps.username}>
            <PostComp
               username={Comps.username}
               numLike={Comps.numLike}
               content={Comps.content}
               url={Comps.url}
            />
         </div>
      );
   })

   return (
      <div>
         <div id="main-page">
            <Header
               url="https://avatars.githubusercontent.com/YuriReiss"
               link="/profile"
            />

            <div id="main-page-container">

               <div id="main-page-nav-container">
                  <nav id="main-page-nav">
                     <Link to="#"><b>Social</b></Link>
                     <Link to="/empregos">Empregos</Link>
                     <Link to="/rank">Rank</Link>
                  </nav>
               </div>

               <div id="main-post-container">

                  {postList}

               </div>
            </div>
         </div>
      </div>
   );
}

export default Main;