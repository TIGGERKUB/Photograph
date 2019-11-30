import * as actionTypes from './follow.types';
import { updateObject } from '../../shared/utility';

const INITIAL_STATE = {
    allRequested: null
};

const allRequestedSuccess = ( state, action ) => {
    return updateObject( state, { allRequested:action.payload.allRequested } );
};


const followReducer = ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case actionTypes.ALLREQUEST_SUCCESS: return allRequestedSuccess(state, action);
        default:
            return state;
    }
};

export default followReducer;