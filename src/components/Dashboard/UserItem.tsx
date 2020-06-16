import {IUser} from "../../redux/interfaces/Model/IUser";
import React from "react";

interface IUserProps {
    user: IUser
}

const UserItem: React.FC<IUserProps> = ({user}) => {
    return (
        <div>
            {user.email}
        </div>
    )
}

export default React.memo(UserItem)
