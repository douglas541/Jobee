import React from 'react';
import PrincipalLogo from '../../components/PrincipalLogo';
import Button from '../../components/Button';

import './styles.css';

function handleClick() {
   console.log('deu certo');
}

function Landing() {

   return (
      <div className="container" id="landing-page-container">

         <div id="landing-page">
            <PrincipalLogo />

            <div id="landing-buttons-wrapper">

               <div id="landing-buttons-container">
                  
                  <div id="title">
                     <p>Sou</p>
                  </div>

                  <div id="landing-buttons">
                     <Button
                        color="green"
                        label="candidato"
                        link="/Login"
                        buttonCallback={handleClick}
                     />
                     <Button
                        color="blue"
                        label="empregador"
                        link="/Login"
                        buttonCallback={handleClick}
                     />
                  </div>
               </div>
            </div>
         </div>

      </div>
   );
}

export default Landing;