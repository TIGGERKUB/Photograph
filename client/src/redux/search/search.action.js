import searchActionTypes from './search.types'
export const onSearchChange = character => ({
    type: searchActionTypes.SEARCH_START,
    payload: character
})