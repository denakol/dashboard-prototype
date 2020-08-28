import { IUser } from '../../interfaces/Model/IUser'
import { IStatus } from '../../interfaces/IStatus'

export interface UserStore {
  users: IUser[] | null
  usersStatus: IStatus
}

export const getInitialState = (): UserStore => {
  return {
    users: null,
    usersStatus: {
      isPending: false,
      isDone: false,
      error: null,
    },
  }
}
