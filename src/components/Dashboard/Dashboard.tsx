import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../redux/store/User/UserActions";
import {IStore} from "../../redux/interfaces/interfaces";
import {Card, Spin} from "antd";
import UserList from "./UserList";
import {IUser} from "../../redux/interfaces/Model/IUser";
import {selectUsers, selectUsersIsDone, selectUsersIsLoading} from "../../redux/store/User/selectors";

export const Dashboard: React.FunctionComponent = () => {
    const dispatch = useDispatch()

    const users = useSelector<IStore, IUser[] | null>(selectUsers)
    const isLoading = useSelector<IStore, boolean>(selectUsersIsLoading)
    const isDone = useSelector<IStore, boolean>(selectUsersIsDone)

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    return (
        <Card title="Dashboard">
            {isLoading && <Spin/>}
            {isDone && users && <UserList users={users}/>}
        </Card>
    )
}
