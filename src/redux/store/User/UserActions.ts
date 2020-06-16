import {
    GET_USERS_DONE,
    GET_USERS_FAILURE,
    GET_USERS_START,
    UserActionTypes
} from "./types";

import axios from "axios";
import {User} from "../../interfaces/Model/User";
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

export function getUsersStart(): UserActionTypes {
    return {
        type: GET_USERS_START
    }
}

export function getUsersDone(users: User[]): UserActionTypes {
    return {
        type: GET_USERS_DONE,
        payload: users
    }
}

export function getUsersFailure(error: string): UserActionTypes {
    return {
        type: GET_USERS_FAILURE,
        payload: error
    }
}
