import * as FavoriteTypes from '../actionTypes/FavoriteTypes';

import FavoriteApi from '../../api/Favorite';



/**
 * list favorite action
 */
function listFavorites(page = 1) {

    return function (dispatch, getState) {

        dispatch({
            type: FavoriteTypes.LIST_FAVORITE
        });


        FavoriteApi.list(page).then(response => {
            dispatch({
                type: FavoriteTypes.LIST_FAVORITE_SUCCESS,
                data: response.data.data
            });
        }).catch(error => {
            dispatch({
                type: FavoriteTypes.LIST_FAVORITE_FAILURE,
                error: error.response.data
            });
        });
    }
}

/**
 * add favorite action
 */
function addFavorites(payload, cb) {

    return function (dispatch, getState) {

        dispatch({
            type: FavoriteTypes.CREATE_FAVORITE
        });

        const data = {
            blog_id: payload.blog_id
        };

        FavoriteApi.add(data).then(response => {
            dispatch({
                type: FavoriteTypes.CREATE_FAVORITE_SUCCESS,
                data: response.data.data
            });
        }).catch(error => {
            dispatch({
                type: FavoriteTypes.CREATE_FAVORITE_FAILURE,
                error: error.response.data
            });
        });
    }
}




export {
    listFavorites,
    addFavorites,
};