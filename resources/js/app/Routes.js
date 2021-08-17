import React from 'react'
import { Route, Switch } from 'react-router'
import AuthenticatedRoute from './AuthenticatedRoute';

// Pages
import Landing from './pages/landing/Index';

import Login from './pages/login/Index';
import Register from './pages/register/Index';

import Dashboard from './pages/dashboard/Index';
import Profile from './pages/profile/Index';
import ProfileStories from './pages/profile/Index';

// Write
import Write from './pages/write/Index';
import Edit from './pages/write/Edit';
import Stories from './pages/profile/stories/Index';

// Blog
import Blog from './pages/dashboard/View';

// Public pages
import About from './pages/about';
import Contact from './pages/contact';

import Error404 from './components/messages/Error404';


export default function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />

            {/* <AuthenticatedRoute exact path='/profile' component={Profile} /> */}

            <Route exact path='/user/:username/stories' component={ProfileStories} />
            <Route exact path='/user/:username' component={Profile} />
            <AuthenticatedRoute exact path='/me/stories' component={Stories} />
            <AuthenticatedRoute exact path='/me/stories/public' component={Stories} />
            <AuthenticatedRoute exact path="/me/stories/lists" component={Stories} />

            <Route exact path='/blog/:username/:blogname' component={Blog} />
            <AuthenticatedRoute exact path='/write' component={Write} />
            <AuthenticatedRoute exact path='/edit/:id' component={Edit} />

            {/* Public pages */}
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />

            {/* <Route exact path='/dashboard' component={Dashboard} /> */}
            <Route exact path="/*" component={Error404} />
        </Switch>
    );
}
