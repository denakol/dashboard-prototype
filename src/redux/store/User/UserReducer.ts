import {
    GET_USERS_DONE,
    GET_USERS_FAILURE,
    GET_USERS_START,
    GetUsersDone, GetUsersFailure,
    GetUsersStart,
    UserActionTypes
} from "./types";
import {getInitialState, UserStore} from "./UserStore";

const initialState = getInitialState()

const getUsersStartHandler = (state: UserStore, action: GetUsersStart) => {

    return {
        ...state,
        users: [],
        usersStatus: {
            isPending: true,
            isDone: false,
            error: null
        }
    }
}

const getUsersDoneHandler = (state: UserStore, action: GetUsersDone) => {
    return {
        ...state,
        users: action.payload,
        usersStatus: {
            isPending: false,
            isDone: true,
            error: null
        }
    }
}
const getUsersFailureHandler = (state: UserStore, action: GetUsersFailure) => {
    return {
        ...state,
        usersStatus: {
            isPending: false,
            isDone: true,
            error: action.payload
        }
    }
}

export default function userReducer(state = initialState, action: UserActionTypes) {
    switch (action.type) {
        case GET_USERS_START :
            return getUsersStartHandler(state, action)
        case GET_USERS_DONE :
            return getUsersDoneHandler(state, action)
        case GET_USERS_FAILURE :
            return getUsersFailureHandler(state, action)
        default:
            return state
    }
}
