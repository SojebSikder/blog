/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from './app/store/reducers/RootReducer';

import Index from './app/Index';


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

if (document.getElementById('app')) {
   ReactDOM.render(
      <Provider store={store}>
         <Router><Index /></Router>
      </Provider>, document.getElementById('app')
   );
}

