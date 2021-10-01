import * as FollowTypes from '../actionTypes/FollowTypes'

const initialState = {
    // List all valid favorite in home page
    follows: [],
    spinner: false,
};

const followReducer = function (state = initialState, action) {
    switch (action.type) {
        case FollowTypes.TOGGLE_FOLLOW:
            return {
                ...state,
                spinner: true
            };
        case FollowTypes.TOGGLE_FOLLOW_SUCCESS:
            return {
                ...state,
                spinner: false,
                follows: action.data,
            };
        case FollowTypes.TOGGLE_FOLLOW_FAILURE:
            return {
                ...state,
                spinner: false,
                error_message: action.error
            };


        default:
            return state;
    }
};


export default followReducer;