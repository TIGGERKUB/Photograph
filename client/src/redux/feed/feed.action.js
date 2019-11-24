import FeedActionTypes from './feed.types'

export const addLike = item => ({
    type: FeedActionTypes.ADD_LIKE,
    payload: item
})