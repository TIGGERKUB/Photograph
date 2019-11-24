import { createSelector } from "reselect";
const selectFeed = state => state.feed;

export const selectFeedPost = createSelector(
  [selectFeed],
  feed => feed.posts
);
export const selectFeedTotalLikes = createSelector(
  [selectFeedPost],
  posts => posts.likes
);
