import {UserStore} from "../store/User/UserStore";
import {PostStore} from "../store/Post/PostStore";

export interface IStore {
    user: UserStore,
    post: PostStore
}
