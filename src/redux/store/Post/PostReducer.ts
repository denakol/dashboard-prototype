import {getInitialState, IPostStore} from "./IPostStore";
import {
    GET_POSTS_DONE,
    GET_POSTS_FAILURE,
    GET_POSTS_START
} from "./types";
import {getPostsDone, getPostsFailure, getPostsStart, PostAction} from "./PostActions";

const initialState = getInitialState()

const getPostsStartHandler = (state: IPostStore, action: ReturnType<typeof getPostsStart>) => {
    return {
        ...state,
        posts: [],
        postsStatus: {
            isPending: true,
            isDone: false,
            error: null
        }
    }
}

const getPostsDoneHandler = (state: IPostStore, action: ReturnType<typeof getPostsDone>) => {
    return {
        ...state,
        posts: action.payload,
        postsStatus: {
            isPending: false,
            isDone: true,
            error: null
        }
    }
}
const getPostsFailureHandler = (state: IPostStore, action: ReturnType<typeof getPostsFailure>) => {
    return {
        ...state,
        postsStatus: {
            isPending: false,
            isDone: true,
            error: action.payload
        }
    }
}

export default function userReducer(state = initialState, action: PostAction) {
    switch (action.type) {
        case GET_POSTS_START :
            return getPostsStartHandler(state, action)
        case GET_POSTS_DONE :
            return getPostsDoneHandler(state, action)
        case GET_POSTS_FAILURE :
            return getPostsFailureHandler(state, action)
        default:
            return state
    }
}
