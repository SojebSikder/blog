import * as FavoriteTypes from '../actionTypes/FavoriteTypes';

const initialState = {
    // List all valid favorite in home page
    favorites: [],
    spinner: false,
};

const favoriteReducer = function (state = initialState, action) {
    switch (action.type) {
        case FavoriteTypes.LIST_FAVORITE:
            return {
                ...state,
                spinner: true
            };
        case FavoriteTypes.LIST_FAVORITE_SUCCESS:
            return {
                ...state,
                spinner: false,
                favorites: action.data,
            };
        case FavoriteTypes.LIST_FAVORITE_FAILURE:
            return {
                ...state,
                spinner: false,
                error_message: action.error
            };


        default:
            return state;
    }
};


export default favoriteReducer;