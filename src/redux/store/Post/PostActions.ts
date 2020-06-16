import axios from 'axios';
import {Dispatch} from "react";
import {GET_POSTS_DONE, GET_POSTS_FAILURE, GET_POSTS_START, PostActionTypes} from "./types";
import {IPost} from "../../interfaces/Model/IPost";

export const getPosts = () => {
    return (dispatch: Dispatch<any>) => {
        dispatch(getPostsStart());
        axios
            .get(`https://gorest.co.in/public-api/posts`, {
                params: {
                    _format: "json",
                    "access-token": "up30apOaxQ90ObhTUpNN269UIpXu63KmxUTP"
                }
            })
            .then(res => {
                dispatch(getPostsDone(res.data.result));
            })
            .catch(err => {
                dispatch(getPostsFailure(err.message));
            });
    };
};

export function getPostsStart(): PostActionTypes {
    return {
        type: GET_POSTS_START
    }
}

export function getPostsDone(posts: IPost[]): PostActionTypes {
    return {
        type: GET_POSTS_DONE,
        payload: posts
    }
}

export function getPostsFailure(error: string): PostActionTypes {
    return {
        type: GET_POSTS_FAILURE,
        payload: error
    }
}

