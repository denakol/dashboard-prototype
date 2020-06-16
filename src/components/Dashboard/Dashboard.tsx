import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../redux/store/User/UserActions";
import {IStore} from "../../redux/interfaces/interfaces";
import {Card, Spin} from "antd";
import UserList from "./UserList";
import {User} from "../../redux/interfaces/Model/User";
import {selectUsers, selectUsersIsDone, selectUsersIsLoading} from "../../redux/store/User/selectors";

export const Dashboard: React.FunctionComponent = () => {
    const dispatch = useDispatch()

    const users = useSelector<IStore, User[]>(selectUsers)
    const isLoading = useSelector<IStore, boolean>(selectUsersIsLoading)
    const isDone = useSelector<IStore, boolean>(selectUsersIsDone)

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    return <Card title="Dashboard">
        {isLoading && <Spin/>}
        {isDone && <UserList users={users}/>}
    </Card>
}
