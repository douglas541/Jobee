import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header';
import ProfileImg from '../../components/ProfileImg'
import changeIcon from '../../assets/images/ChangeIcon.svg'
import ImageJobPoints from '../../assets/images/JobPoints.svg'
import graphImage from '../../assets/images/graphImage.png'

import './styles.css'

function Profile() {
   const [profileInfos, setProfileInfos] = useState({
      nome: "Yuri Reis",
      idade: "20",
      email: "yuri.reis@gmail.com",
      telefone: "62 999999999",
      instituicao: "UFG",
      curso: "Ciências da Computação",
      duracao: "9 Semestres"
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
                  <Link to="/profile">Social</Link>
                  <Link to="/profileinfos"><b>Informações</b></Link>
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

               <ul>
                  <li className="userProfile-infoitems">
                     <div>Nome:</div>
                     <div>{profileInfos.nome}</div>
                  </li>
                  <li className="userProfile-infoitems">
                     <div>Idade:</div>
                     <div>{profileInfos.idade}</div>
                  </li>
                  <li className="userProfile-infoitems">
                     <div>Email:</div>
                     <div>{profileInfos.email}</div>
                  </li>
                  <li className="userProfile-infoitems">
                     <div>Telefone:</div>
                     <div>{profileInfos.telefone}</div>
                  </li>
                  <li className="userProfile-infoitems">
                     <div>Instituicao:</div>
                     <div>{profileInfos.instituicao}</div>
                  </li>
                  <li className="userProfile-infoitems">
                     <div>Curso:</div>
                     <div>{profileInfos.curso}</div>
                  </li>
                  <li className="userProfile-infoitems">
                     <div>Duração:</div>
                     <div>{profileInfos.duracao}</div>
                  </li>
               </ul>

               <Link to="#" id="userProfile-editProfile-button">
                  editar perfil
               </Link>

            </div>

            <div id="userProfile-graphImage">
               <img src={graphImage}/>
            </div>

         </div>
      </div>
   );
}

export default Profile;