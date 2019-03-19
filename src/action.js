import { FETCH_TOKEN_START, FETCH_TOKEN_SUCCESS, FETCH_TOKEN_FAILURE,
        USER_AUTH, FETCH_JOGS_START, FETCH_JOGS_SUCCESS, FETCH_JOGS_FAILURE } from './actionTypes';
import { fetchToken as fetchTokenApi, fetchJogs as fetchJogsApi } from './api';
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

export const fetchJogs = () => async dispatch => {
    dispatch({ type: FETCH_JOGS_START })
  
    try { 
        const jogs = await fetchJogsApi(); 
        dispatch({
            type: FETCH_JOGS_SUCCESS,
            payload: jogs
        }) 
    } catch (err) {
        dispatch({
            type: FETCH_JOGS_FAILURE,
            payload: err,
            error: true
      })
    }
}