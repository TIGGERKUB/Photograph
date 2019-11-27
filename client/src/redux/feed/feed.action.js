import FeedActionTypes from './feed.types'

export const createPostStart = () => {
    return{
        type: FeedActionTypes.POST_PICTURE_START
    }
}
export const createPostSuccess = result => {
    return{
        type: FeedActionTypes.POST_PICTURE_SUCCESS,
        payload: result
    }
}
export const createPostFailure = error => {
    return{
        type: FeedActionTypes.POST_PICTURE_FAILURE,
        payload: error
    }
}
export const createPost = newPost => {
    console.log(newPost)
}

export const addLike = item => ({
    type: FeedActionTypes.ADD_LIKE,
    payload: item
})