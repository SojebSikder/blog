import * as CounterTypes from '../actionTypes/CounterTypes';

const initialState = {
    count: 0,
}

const counterReducer = function (state = initialState, action) {
    switch (action.type) {
        case CounterTypes.INCREMENT:
            return {
                ...state,
                count: state.count + action.payload,
            };

        case CounterTypes.DECREMENT:
            return {
                ...state,
                count: state.count - action.payload,
            };

        default:
            return state;
    }

}

export default counterReducer;