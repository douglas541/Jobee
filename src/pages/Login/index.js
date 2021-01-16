import React from 'react';
import PrincipalLogo from '../../components/PrincipalLogo';
import Button from '../../components/Button';

import './styles.css';
import { Link } from 'react-router-dom';

function handleClick() {

}

function Login() {
   return (
      <div className="container" id="login-page-container">
         <div id="login-page">
            <PrincipalLogo />

            <div id="login-wrapper">
               <input
                  type="text"
                  className="login-input"
                  id="first-login-input"
                  placeholder="Nome de usuário"
               />

               <input
                  type="password"
                  className="login-input"
                  id="second-login-input"
                  placeholder="Senha"
               />

               <Button
                  color="green"
                  label="Login"
                  link="/MainSocial"
                  buttonCallback={handleClick}
               />

               <div id="login-register-area">
                  <p>Não tem conta?</p>
                  <Link to="/Register">cadastre-se</Link>
               </div>

               <Link to="/" id="login-return">voltar</Link>
            </div>
         </div>
      </div>
   );
}

export default Login;