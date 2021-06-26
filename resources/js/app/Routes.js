import React from 'react'
import { Route, Switch } from 'react-router'

// Pages
import Landing from './components/pages/landing/Index';

import Login from './components/pages/login/Index';
import Register from './components/pages/register/Index';

import Dashboard from './components/pages/dashboard/Index';

import Error404 from './components/messages/Error404';

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Dashboard} />

            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />

            {/* <Route exact path='/dashboard' component={Dashboard} /> */}
            <Route exact path="/*" component={Error404} />
        </Switch>
    );
}
