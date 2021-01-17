import React from 'react'
import { Link } from 'react-router-dom'
import HorizontalLogo from '../HorizontalLogo'
import ProfileImg from '../ProfileImg'

import logoutImg from '../../assets/images/logout.svg'
import backArrow from '../../assets/images/backArrow.svg'
import './styles.css'

function Header(props) {
   const { url, link } = props;

   let prop;

   if (url != "") {
      prop = (
         <ProfileImg
            url={url}
            size="2"
            link={link}
         />
      );
   } else {
      prop = (
         <div>
            <Link to="/social" id="backArrow">
               <img src={backArrow} />
            </Link>
         </div>
      )
   }

   return (
      <div id="header-wrapper">
         <header id="header-component">

            {prop}

            <HorizontalLogo />

            <Link to="/" id="header-logout-img">
               <img src={logoutImg}></img>
            </Link>

         </header>
      </div>

   );
}

export default Header;