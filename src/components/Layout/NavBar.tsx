import React, {useCallback} from "react"
import {FirebaseHelper, UserInfo} from "../../auth/FirebaseHelper";

import s from "./Navbar.module.css"
import {Button} from "antd";

interface NavBarProps {
    user: UserInfo
}
const NavBar: React.FC<NavBarProps> = ({user}) => {
    const logOut = useCallback(() => {
        FirebaseHelper.signOut()
    }, [])
    return <div className={s.navbar}>
        <div className={s.name}>
            {user.email}
        </div>
        <Button type="link" onClick={logOut}>Log out</Button>
    </div>
}

export default React.memo(NavBar);
