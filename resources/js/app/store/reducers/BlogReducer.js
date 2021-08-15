import * as BlogTypes from '../actionTypes/BlogTypes';

const initialState = {
    // List all valid blog in home page
    blogs: [],
    // for single blog
    blog: [],
    // For draft
    draft: [],
    // This is for published post
    publishedBlog: [],
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


        // Show current user published
        case BlogTypes.SHOW_PUBLISHED:
            return {
                ...state,
                spinner: true
            };
        case BlogTypes.SHOW_PUBLISHED_SUCCESS:
            return {
                ...state,
                spinner: false,
                publishedBlog: action.data,
            };
        case BlogTypes.SHOW_PUBLISHED_FAILURE:
            return {
                ...state,
                spinner: false,
                error_message: action.error
            };

        // Show current user draft
        case BlogTypes.SHOW_DRAFT:
            return {
                ...state,
                spinner: true
            };
        case BlogTypes.SHOW_DRAFT_SUCCESS:
            return {
                ...state,
                spinner: false,
                draft: action.data,
            };
        case BlogTypes.SHOW_DRAFT_FAILURE:
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