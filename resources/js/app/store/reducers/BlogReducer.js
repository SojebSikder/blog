import * as BlogTypes from '../actionTypes/BlogTypes';

const initialState = {
    blogs: [],
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
        default:
            return state;
    }
};

/**
 * handle field change
 */
function handleChange(state, action) {
    if (action.field !== 'is_admin') {
        return {
            ...state,
            user: { ...state.user, [action.field]: action.data }
        };
    } else {
        let checked = state.user.is_admin;

        if (action.checked == true) {
            checked = 1;
        } else if (action.checked == false) {
            checked = 0;
        }

        return {
            ...state,
            user: { ...state.user, is_admin: checked }
        };
    }
}

export default blogReducer;