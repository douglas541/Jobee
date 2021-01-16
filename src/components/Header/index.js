import React from 'react'
import { Link } from 'react-router-dom'
import HorizontalLogo from '../HorizontalLogo'
import ProfileImg from '../ProfileImg'

import logoutImg from '../../assets/images/logout.svg'
import './styles.css'

function Header(props) {
   const { url } = props;

   return (
      <div id="header-wrapper">
         <header id="header-component">

            <ProfileImg
               url={url}
               size="2"
               link="#"
            />

            <HorizontalLogo />

            <Link to="/" id="header-logout-img">
               <img src={logoutImg}></img>
            </Link>

         </header>
      </div>

   );
}

export default Header;