import * as DataTypes from '../actionTypes/DataTypes';

const initialState = {
    data: [],
};

const dataReducer = function (state = initialState, action) {
    switch (action.type) {
        case DataTypes.LIST_DATA:
            return {
                ...state,
            };
        case DataTypes.LIST_DATA_SUCCESS:
            return {
                ...state,
                data: action.data,
            };
        case DataTypes.LIST_DATA_FAILURE:
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

export default dataReducer;