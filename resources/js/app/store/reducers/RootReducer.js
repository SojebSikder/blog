import { combineReducers } from 'redux';
import dataReducer from './DataReducer';
import counterReducer from './CounterReducer';

import blogReducer from './BlogReducer';
import userReducer from './UserReducer';

const rootReducer = combineReducers({
    data: dataReducer,
    counter: counterReducer,
    blog: blogReducer,
    user: userReducer,
});

export default rootReducer;