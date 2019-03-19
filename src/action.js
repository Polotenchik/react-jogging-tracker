import { FETCH_TOKEN_START, FETCH_TOKEN_SUCCESS, FETCH_TOKEN_FAILURE,
        USER_AUTH } from './actionTypes';
import { fetchToken as fetchTokenApi } from './api';
import { isAuthenticate } from './helpers';
  
export const fetchToken = () => async dispatch => {
    dispatch({ type: FETCH_TOKEN_START })
  
    try { 
        const token = await fetchTokenApi(); 
        dispatch({
            type: FETCH_TOKEN_SUCCESS,
            payload: token
        }) 
    } catch (err) {
        dispatch({
            type: FETCH_TOKEN_FAILURE,
            payload: err,
            error: true
      })
    }
}

export const checkAuth = () => dispatch => {
    const isAuth = isAuthenticate();
    dispatch({
        type: USER_AUTH,
        payload: isAuth
    })
}