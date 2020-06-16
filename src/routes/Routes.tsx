import React from "react";
import {UserContext} from "../auth/UserProvider";
import {
    BrowserRouter as Router,
} from "react-router-dom";

import {PrivateRoutes} from "./privateRoutes/PrivateRoutes";
import {PublicRoutes} from "./publicRoutes/PublicRoutes";

function isNotNull<T> (arg: T): arg is Exclude<T, null> {
    return arg !== null
}

export default () => {
    return <Router>
        <UserContext.Consumer>
            {({isInit, user}) => {
                if (!isInit) {
                    return <div/>
                } else if (isNotNull(user)) {
                    return <PrivateRoutes user={user}/>
                } else {
                    return <PublicRoutes/>
                }
            }
            }
        </UserContext.Consumer>
    </Router>
}
