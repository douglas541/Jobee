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
         <Route path="/Login" component={Login} />
         <Route path="/Register" component={Register} />
         <Route path="/MainSocial" component={MainSocial} />
         <Route path="/MainEmprego" component={MainEmprego} />
         <Route path="/MainRank" component={MainRank} />
         <Route path="/UserProfile" component={UserProfile} />
      </BrowserRouter>
   );
}

export default Routes;