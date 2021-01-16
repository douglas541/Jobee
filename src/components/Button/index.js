import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

/*
   color= se for green o botão será verde, se não ele será azul
   label= label do botão
   link= link de redirecionamento ao clicar no botão
   buttonCallback= função de callback que será executada no clique
*/
function Button(props) {
   const { color, label, link, buttonCallback } = props;
   let newColor;

   color === 'green' ? newColor = '#6FCF97' : newColor = '#49C9F2';

   const divStyle = {
      backgroundColor: newColor,
   }

   return (
      <div id="button-component-container">
         <Link to={link}
            onClick={buttonCallback}
            style={divStyle}
         >
            {label}
         </Link>
      </div>
   )
}

export default Button;