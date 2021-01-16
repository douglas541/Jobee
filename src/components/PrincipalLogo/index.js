import React from 'react';
import logoImg from '../../assets/images/blueLogo.svg';

import './styles.css'

function PrincipalLogo() {
   return (
      <div id="logo">

         <img src={logoImg} />
         <h1>Jo<b>Bee</b></h1>

      </div>
   )
}

export default PrincipalLogo;