import React from 'react'
import { Route, Switch } from 'react-router'

// Pages
import Landing from './pages/landing/Index';

import Login from './pages/login/Index';
import Register from './pages/register/Index';

import Dashboard from './pages/dashboard/Index';
import Profile from './pages/profile/Index';

// Write
import Write from './pages/write/Index';

// Blog
import Blog from './pages/dashboard/View';

import Error404 from './components/messages/Error404';

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/profile' component={Profile} />
            
            <Route exact path='/blog/:username/:blogname' component={Blog} />
            <Route exact path='/write' component={Write} />

            {/* <Route exact path='/dashboard' component={Dashboard} /> */}
            <Route exact path="/*" component={Error404} />
        </Switch>
    );
}
