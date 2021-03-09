import React from 'react'
import { Route, Router, Switch } from "react-router";
import Login from '../pages/login'
import Home from '../pages/home'
import { history } from '../history'
import NotFound from './NotFound'

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route component={Login} exact path="/" />
            <Route component={Home} exact path="/home" />
            <Route component={NotFound} />
        </Switch>
    </Router>
)

export default Routes;