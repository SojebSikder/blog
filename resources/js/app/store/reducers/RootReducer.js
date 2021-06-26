import { combineReducers } from 'redux';
import dataReducer from './DataReducer';
import counterReducer from './CounterReducer';

import blogReducer from './BlogReducer';

const rootReducer = combineReducers({
    data: dataReducer,
    counter: counterReducer,
    blog: blogReducer,
});

export default rootReducer;