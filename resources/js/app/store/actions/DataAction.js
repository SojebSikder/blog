import * as DataTypes from '../actionTypes/DataTypes';

import Data from '../../api/Data';



/**
 * list Data action
 */
function listData(page = 1) {

    return function (dispatch, getState) {

        dispatch({
            type: DataTypes.LIST_DATA
        });


        Data.list(page).then(response => {
            dispatch({
                type: DataTypes.LIST_DATA_SUCCESS,
                data: response.data.data
            });
        }).catch(error => {
            dispatch({
                type: DataTypes.LIST_DATA_FAILURE,
                error: error.response.data
            });
        });
    }
}



export {
    listData,
};