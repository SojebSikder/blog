import * as CounterTypes from '../actionTypes/CounterTypes';

/**
 * Increment action
 */
function increment(data) {
    return function (dispatch, getState) {
        dispatch({
            type: CounterTypes.INCREMENT,
            payload: data,
        });
    }
}

/**
 * Decrement action
 */
function decrement(data) {
    return function (dispatch, getState) {
        dispatch({
            type: CounterTypes.DECREMENT,
            payload: data,
        });

    }
}

export {
    increment,
    decrement,
};