import * as FollowTypes from '../actionTypes/FollowTypes';
import FollowApi from '../../api/Follow';



/**
 * add favorite action
 */
function toggleFollow(payload, cb) {

    return function (dispatch, getState) {

        dispatch({
            type: FollowTypes.TOGGLE_FOLLOW
        });

        const data = {
            user_id: payload.user_id
        };

        FollowApi.toggleFollow(data).then(response => {
            dispatch({
                type: FollowTypes.TOGGLE_FOLLOW_SUCCESS,
                data: response.data.data
            });
        }).catch(error => {
            dispatch({
                type: FollowTypes.TOGGLE_FOLLOW_FAILURE,
                error: error.response.data
            });
        });
    }
}




export {
    toggleFollow,
};