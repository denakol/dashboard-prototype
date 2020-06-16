import {User} from "../../redux/interfaces/Model/User";
import React from "react";
import UserItem from "./UserItem";

interface UserProps {
    users: User[]
}

const UserList: React.FC<UserProps> = ({users}) => {
    return <div>
        {users.map(user => <UserItem user={user}  key={user.id} />)}
    </div>
}
export default React.memo(UserList)
