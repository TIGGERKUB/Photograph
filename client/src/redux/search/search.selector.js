import {createSelector} from 'reselect'
const selectSearch = state => state.search;
export const selectSearchUsers = createSelector(
    [selectSearch],
    search => search.users
)
export const selectSearchCharacter = createSelector(
    [selectSearch],
    search => search.searchField
)
export const selectSearchLoading = createSelector(
    [selectSearch],
    search => search.loading
)