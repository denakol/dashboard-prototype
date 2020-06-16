import {User} from "../../interfaces/Model/User";
import {Status} from "../../interfaces/Status";

export interface UserStore {
    users: User[],
    usersStatus: Status
}

export const getInitialState = (): UserStore => {
    return {
        users: [],
        usersStatus: {
            isPending: false,
            isDone: false,
            error: null
        }
    }
}
