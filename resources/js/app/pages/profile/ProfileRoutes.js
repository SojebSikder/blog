import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AuthenticatedRoute from '../../AuthenticatedRoute';

import ProfileAbout from './public_profile/About';
import ProfileStories from './public_profile/Stories';

import Drafts from './stories/Drafts';
import Published from './stories/Published';
import Favorite from './stories/Favorite';

export default function ProfileRoutes() {
    return (
        <Switch>
            <Route exact path="/user/:username" component={ProfileAbout} />
            <Route exact path="/user/:username/stories" component={ProfileStories} />

            <AuthenticatedRoute exact path="/me/stories" component={Drafts} />
            <AuthenticatedRoute exact path="/me/stories/public" component={Published} />
            <AuthenticatedRoute exact path="/me/stories/lists" component={Favorite} />
        </Switch>
    )
}
