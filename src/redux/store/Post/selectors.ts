import { IStore } from '../../interfaces/interfaces'

const selectPosts = (store: IStore) => store.post.posts
const selectPostsIsLoading = (store: IStore) => store.post.postsStatus.isPending
const selectPostsIsDone = (store: IStore) => store.post.postsStatus.isDone
const selectPostsError = (store: IStore) => store.post.postsStatus.error

export { selectPosts, selectPostsIsLoading, selectPostsIsDone, selectPostsError }
