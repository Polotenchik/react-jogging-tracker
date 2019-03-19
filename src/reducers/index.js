import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import token from './token';
import auth from './auth';
import jogs from './jogs';
// import devicePage from './devicePage';
// import basket from './basket';
// import categories from './categories';

export default combineReducers({
    routing: routerReducer,
    token,
    isAuth: auth,
    jogs,
    // phonePage,
    // devicePage,
    // basket,
    // categories
})