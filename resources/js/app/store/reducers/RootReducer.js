import { combineReducers } from 'redux';
import dataReducer from './DataReducer';
import counterReducer from './CounterReducer';

import blogReducer from './BlogReducer';
import userReducer from './UserReducer';
import favoriteReducer from './FavoriteReducer';

const rootReducer = combineReducers({
    data: dataReducer,
    counter: counterReducer,
    blog: blogReducer,
    user: userReducer,
    favorite: favoriteReducer,
});

export default rootReducer;