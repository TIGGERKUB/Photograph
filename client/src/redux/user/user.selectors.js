import { createSelector } from "reselect";

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.token!== null
);
export const selectUsername = createSelector(
  [selectUser],
  user => user.username
)