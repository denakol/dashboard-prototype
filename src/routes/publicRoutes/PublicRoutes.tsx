import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {SignIn} from "../../components/Auth/SignIn";
import {SignUp} from "../../components/Auth/SignUp";
import s from "./PublicRoutes.module.css"

export const PublicRoutes =  () => {
    return <div className={s.container}>
        <Switch>
            <Route path="/signIn" component={SignIn}/>
            <Route path="/signUp" component={SignUp}/>
            <Redirect to="/signIn"/>
        </Switch>
    </div>
}
