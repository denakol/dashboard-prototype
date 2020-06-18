import {IStatus} from "../../interfaces/IStatus";
import {IPost} from "../../interfaces/Model/IPost";

export interface PostSlice {
    posts: IPost[] | null,
    postsStatus: IStatus
}

export const getInitialState = (): PostSlice => {
    return {
        posts: null,
        postsStatus: {
            isPending: false,
            isDone: false,
            error: null
        }
    }
}

