import * as BlogTypes from '../actionTypes/BlogTypes';

const initialState = {
    blogs: [],
    blog: [],
};

const blogReducer = function (state = initialState, action) {
    switch (action.type) {
        case BlogTypes.LIST_BLOG:
            return {
                ...state,
            };
        case BlogTypes.LIST_BLOG_SUCCESS:
            return {
                ...state,
                blogs: action.data,
            };
        case BlogTypes.LIST_BLOG_FAILURE:
            return {
                ...state,
            };
        // Show one
        case BlogTypes.SHOW_BLOG:
            return {
                ...state,
            };
        case BlogTypes.SHOW_BLOG_SUCCESS:
            return {
                ...state,
                blog: action.data,
            };
        case BlogTypes.SHOW_BLOG_FAILURE:
            return {
                ...state,
            };
        default:
            return state;
    }
};



export default blogReducer;