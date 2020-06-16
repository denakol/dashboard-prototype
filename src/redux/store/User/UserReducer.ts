import {
    GET_USERS_DONE,
    GET_USERS_FAILURE,
    GET_USERS_START,
} from "./types";
import {getInitialState, UserStore} from "./UserStore";
import {getUsersDone, getUsersFailure, getUsersStart, UserAction} from "./UserActions";

const initialState = getInitialState()

const getUsersStartHandler = (state: UserStore, action: ReturnType<typeof getUsersStart>) => {

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

const getUsersDoneHandler = (state: UserStore, action: ReturnType<typeof getUsersDone>) => {
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
const getUsersFailureHandler = (state: UserStore, action: ReturnType<typeof getUsersFailure>) => {
    return {
        ...state,
        usersStatus: {
            isPending: false,
            isDone: true,
            error: action.payload
        }
    }
}

export default function userReducer(state = initialState, action: UserAction) {
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
