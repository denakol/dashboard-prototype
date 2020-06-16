import {getInitialState, PostStore} from "./PostStore";
import {
    GET_POSTS_DONE,
    GET_POSTS_FAILURE,
    GET_POSTS_START,
    GetPostsDone,
    GetPostsFailure,
    GetPostsStart,
    PostActionTypes
} from "./types";

const initialState = getInitialState()

const getPostsStartHandler = (state: PostStore, action: GetPostsStart) => {
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

const getPostsDoneHandler = (state: PostStore, action: GetPostsDone) => {
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
const getPostsFailureHandler = (state: PostStore, action: GetPostsFailure) => {
    return {
        ...state,
        postsStatus: {
            isPending: false,
            isDone: true,
            error: action.payload
        }
    }
}

export default function userReducer(state = initialState, action: PostActionTypes) {
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
