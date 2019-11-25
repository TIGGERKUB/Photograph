import { createSelector } from "reselect";
const selectFeed = state => state.feed;

export const selectFeedPost = createSelector([selectFeed], feed => feed.posts);
export const selectFeedIsLike = createSelector(
  [selectFeed],
  feed => feed.isLike
);
