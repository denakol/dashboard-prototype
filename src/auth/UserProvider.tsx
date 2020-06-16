import React, {Component, createContext} from "react";
import {firebaseAuth, UserInfo} from "./FirebaseHelper"

interface IUserContext {
    user: UserInfo | null,
    isInit: boolean
}

export const UserContext = createContext<IUserContext>({
    user: null,
    isInit: false
});

class UserProvider extends Component {
    state = {
        user: null,
        isInit: false
    };

    componentDidMount() {
        firebaseAuth().onAuthStateChanged(user => {
            user
                ? this.setState(() => ({user, isInit: true}))
                : this.setState(() => ({user: null, isInit: true}))
        })
    };

    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserProvider;
