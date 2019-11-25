import {createSelector} from 'reselect'
const selectProfile = state => state.profile;
export const selectProfileFollowers = createSelector(
    [selectProfile],
    profile => profile.followers
)