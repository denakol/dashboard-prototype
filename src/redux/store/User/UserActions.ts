import {
    GET_USERS_DONE,
    GET_USERS_FAILURE,
    GET_USERS_START
} from "./types";

import axios from "axios";
import {IUser} from "../../interfaces/Model/IUser";
import {Dispatch} from "react";

export const getUsers = () => {
    return (dispatch: Dispatch<any>) => {
        dispatch(getUsersStart());
        axios
            .get(`https://gorest.co.in/public-api/users`, {
                params: {
                    _format: "json",
                    "access-token": "up30apOaxQ90ObhTUpNN269UIpXu63KmxUTP"
                }
            })
            .then(res => {
                dispatch(getUsersDone(res.data.result));
            })
            .catch(err => {
                dispatch(getUsersFailure(err.message));
            });
    };
};

export function getUsersStart() {
    return {
        type: GET_USERS_START
    } as const
}

export function getUsersDone(users: IUser[]) {
    return {
        type: GET_USERS_DONE,
        payload: users
    } as const
}

export function getUsersFailure(error: string) {
    return {
        type: GET_USERS_FAILURE,
        payload: error
    } as const
}

export type UserAction = ReturnType<typeof getUsersStart | typeof getUsersDone | typeof getUsersFailure>
