import { IStatus } from '../../interfaces/IStatus'
import { IPost } from '../../interfaces/Model/IPost'

export interface IPostStore {
  posts: IPost[] | null
  postsStatus: IStatus
}

export const getInitialState = (): IPostStore => {
  return {
    posts: null,
    postsStatus: {
      isPending: false,
      isDone: false,
      error: null,
    },
  }
}
