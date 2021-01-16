import React from 'react'
import whiteLogo from '../../assets/images/whiteLogo.svg'

import './styles.css'

function HorizontalLogo(){
   return(
      <div id="horizontal-logo-container">
         <img src={whiteLogo}/>
         <h1>Jo<b>Bee</b></h1>
      </div>
   );
}

export default HorizontalLogo;