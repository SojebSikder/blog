import * as BlogTypes from '../actionTypes/BlogTypes';

const initialState = {
    blogs: [],
    blog: [],
    spinner: false,
};

const blogReducer = function (state = initialState, action) {
    switch (action.type) {
        case BlogTypes.LIST_BLOG:
            return {
                ...state,
                spinner: true
            };
        case BlogTypes.LIST_BLOG_SUCCESS:
            return {
                ...state,
                spinner: false,
                blogs: action.data,
            };
        case BlogTypes.LIST_BLOG_FAILURE:
            return {
                ...state,
                spinner: false,
                error_message: action.error
            };
        // Show one
        case BlogTypes.SHOW_BLOG:
            return {
                ...state,
                spinner: true
            };
        case BlogTypes.SHOW_BLOG_SUCCESS:
            return {
                ...state,
                spinner: false,
                blog: action.data,
            };
        case BlogTypes.SHOW_BLOG_FAILURE:
            return {
                ...state,
                spinner: false,
                error_message: action.error
            };
        default:
            return state;
    }
};



export default blogReducer;