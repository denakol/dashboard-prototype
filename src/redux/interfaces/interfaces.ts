import {UserStore} from "../store/User/UserStore";
import {IPostStore} from "../store/Post/IPostStore";

export interface IStore {
    user: UserStore,
    post: IPostStore
}
