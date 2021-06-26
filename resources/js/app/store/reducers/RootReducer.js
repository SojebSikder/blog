import { combineReducers } from 'redux';
import dataReducer from './DataReducer';
import counterReducer from './CounterReducer';

const rootReducer = combineReducers({
    data: dataReducer,
    counter: counterReducer,
});

export default rootReducer;