import { createSelector } from "reselect";

const selectUser = state => state.user;
//isLogin
export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.token!== null
);
//current user
export const selectUsername = createSelector(
  [selectUser],
  user => user.username
)