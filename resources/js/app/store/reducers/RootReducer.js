import { combineReducers } from 'redux';
import dataReducer from './DataReducer';
import counterReducer from './CounterReducer';

import blogReducer from './BlogReducer';
import userReducer from './UserReducer';
import favoriteReducer from './FavoriteReducer';
import followReducer from './FollowReducer';

const rootReducer = combineReducers({
    data: dataReducer,
    counter: counterReducer,
    blog: blogReducer,
    user: userReducer,
    favorite: favoriteReducer,
    follow: followReducer,
});

export default rootReducer;