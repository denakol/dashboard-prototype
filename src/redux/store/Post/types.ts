import {IPost} from "../../interfaces/Model/IPost";

export const GET_POSTS_START = 'GET_POSTS_START'
export const GET_POSTS_DONE = 'GET_POSTS_DONE'
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'

export interface GetPostsStart {
    type: typeof GET_POSTS_START
}

export interface GetPostsDone {
    type: typeof GET_POSTS_DONE,
    payload: IPost[]
}

export interface GetPostsFailure {
    type: typeof GET_POSTS_FAILURE,
    payload: string
}

export type PostActionTypes =  GetPostsStart | GetPostsDone | GetPostsFailure
