import * as BlogTypes from '../actionTypes/BlogTypes';

import Blog from '../../api/Blog';



/**
 * list Data action
 */
function listBlogs(page = 1) {

    return function (dispatch, getState) {

        dispatch({
            type: BlogTypes.LIST_BLOG
        });


        Blog.list(page).then(response => {
            dispatch({
                type: BlogTypes.LIST_BLOG_SUCCESS,
                data: response.data.data
            });
        }).catch(error => {
            dispatch({
                type: BlogTypes.LIST_BLOG_FAILURE,
                error: error.response.data
            });
        });
    }
}



export {
    listBlogs,
};