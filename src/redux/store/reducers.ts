import {combineReducers} from 'redux';
import {IStore} from "../interfaces/interfaces";
import {getInitialState as GetUserInitialState} from "./User/UserStore";
import {getInitialState as GetPostInitialState} from "./Post/PostStore";
import UserReducer from "./User/UserReducer";
import PostReducer from "./Post/PostReducer";

export const rootReducer = combineReducers({
    user: UserReducer,
    post: PostReducer
});

export const getInitialState = (): IStore => ({
    user: GetUserInitialState(),
    post: GetPostInitialState(),
});
