import {UserSlice} from "../store/User/UserSlice";
import {PostSlice} from "../store/Post/PostSlice";

export interface IStore {
    user: UserSlice,
    post: PostSlice
}
