import {Status} from "../../interfaces/Status";
import {Post} from "../../interfaces/Model/Post";

export interface PostStore {
    posts: Post[],
    postsStatus: Status
}

export const getInitialState = (): PostStore => {
    return {
        posts: [],
        postsStatus: {
            isPending: false,
            isDone: false,
            error: null
        }
    }
}

