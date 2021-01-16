import React from 'react'
import { Link } from 'react-router-dom'

/*
   url= url da imagem
   size= width da imagem
   link= link de redirecionamento ao clicar
*/
function ProfileImg(props) {
   const { url, size, link } = props;

   const imgStyles = {
      width: `${size}rem`,
      borderRadius: '100%',
   }

   return (
      <div>
         <Link to={link}>
            <img
               src={url}
               style={imgStyles}
            />
         </Link>
      </div>
   );
}

export default ProfileImg;