import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import token from './token';
import auth from './auth';
import jogs from './jogs';

export default combineReducers({
    routing: routerReducer,
    token,
    isAuth: auth,
    jogs,
});