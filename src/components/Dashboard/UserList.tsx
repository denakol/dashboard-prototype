import {IUser} from "../../redux/interfaces/Model/IUser";
import React from "react";
import UserItem from "./UserItem";

interface IUserProps {
    users: IUser[]
}

const UserList: React.FC<IUserProps> = ({users}) => {
    return <div>
        {users.map(user => <UserItem user={user}  key={user.id} />)}
    </div>
}
export default React.memo(UserList)
