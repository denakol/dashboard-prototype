import {User} from "../../interfaces/Model/User";

export const GET_USERS_START = 'GET_USERS_START'
export const GET_USERS_DONE = 'GET_USERS_DONE'
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE'

export interface GetUsersStart {
    type: typeof GET_USERS_START
}

export interface GetUsersDone {
    type: typeof GET_USERS_DONE,
    payload: User[]
}

export interface GetUsersFailure {
    type: typeof GET_USERS_FAILURE,
    payload: string
}

export type UserActionTypes =  GetUsersStart | GetUsersDone | GetUsersFailure
