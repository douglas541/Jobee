import React from 'react';
import ReactDOM from 'react-dom'
import './assets/styles/global.css'
import App from './App';
import Favicon from 'react-favicon';

import logo from './assets/images/blueLogo.svg'

ReactDOM.render(
  <React.StrictMode>
    <Favicon url={logo}/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
