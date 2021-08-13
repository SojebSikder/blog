import * as BlogTypes from '../actionTypes/BlogTypes';

import Blog from '../../api/Blog';



/**
 * list blog action
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

/**
 * Show blog using username and blog name
 * @param {*} username 
 * @param {*} blog_name 
 * @returns 
 */
function showBlog(username, blog_name) {
    return function (dispatch, getState) {

        dispatch({
            type: BlogTypes.SHOW_BLOG
        });


        Blog.showByUserAndName(username, blog_name).then(response => {
            dispatch({
                type: BlogTypes.SHOW_BLOG_SUCCESS,
                data: response.data.data
            });

        }).catch(error => {
            dispatch({
                type: BlogTypes.SHOW_BLOG_FAILURE,
                error: error.response.data
            });
        });
    }
}

/**
 * Show current user draft action
 */
function showDraft(page = 1) {
    return function (dispatch, getState) {
        dispatch({
            type: BlogTypes.SHOW_DRAFT
        });

        Blog.listDraft(page).then(response => {
            dispatch({
                type: BlogTypes.SHOW_DRAFT_SUCCESS,
                data: response.data.data
            });

        }).catch(error => {
            dispatch({
                type: BlogTypes.SHOW_BLOG_FAILURE,
                error: error.response.data
            });
        });


    }
}



export {
    listBlogs,
    showBlog,
    showDraft,
};