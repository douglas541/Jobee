import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Login from './pages/Login'
import Register from './pages/Register'
import UserProfile from './pages/UserProfile'
import MainSocial from './pages/MainSocial'
import MainRank from './pages/MainRank'
import MainEmprego from './pages/MainEmprego'

function Routes() {
   return (
      <BrowserRouter>
         <Route path="/" exact component={Landing} />
         <Route path="/login" component={Login} />
         <Route path="/register" component={Register} />
         <Route path="/social" component={MainSocial} />
         <Route path="/empregos" component={MainEmprego} />
         <Route path="/rank" component={MainRank} />
         <Route path="/profile" component={UserProfile} />
      </BrowserRouter>
   );
}

export default Routes;