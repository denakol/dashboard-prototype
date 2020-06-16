import {User} from "../../redux/interfaces/Model/User";
import React from "react";

interface UserProps {
    user: User
}

const UserItem: React.FC<UserProps> = ({user}) => {
    return <div>
        {user.email}
    </div>
}

export default React.memo(UserItem)
