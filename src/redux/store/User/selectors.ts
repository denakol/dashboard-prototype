import {IStore} from "../../interfaces/interfaces";

const selectUsers = ((store: IStore) => store.user.users)
const selectUsersIsLoading = ((store: IStore) => store.user.usersStatus.isPending)
const selectUsersIsDone = ((store: IStore) => store.user.usersStatus.isDone)
const selectUsersFailure = ((store: IStore) => store.user.usersStatus.error)

export {
    selectUsers,
    selectUsersIsLoading,
    selectUsersIsDone,
    selectUsersFailure
}
