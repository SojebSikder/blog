import React from 'react'
import { Route, Switch } from 'react-router-dom'

import ProfileAbout from './public_profile/About';
import ProfileStories from './public_profile/Stories';

export default function ProfileRoutes() {
    return (
        <Switch>
            <Route exact path="/user/:username" component={ProfileAbout} />
            <Route exact path="/user/:username/stories" component={ProfileStories} />
        </Switch>
    )
}
