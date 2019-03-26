import { FETCH_TOKEN_START, FETCH_TOKEN_SUCCESS, FETCH_TOKEN_FAILURE,
        USER_AUTH, FETCH_JOGS_START, FETCH_JOGS_SUCCESS, FETCH_JOGS_FAILURE,
        ADD_JOG_START, ADD_JOG_SUCCESS, ADD_JOG_FAILURE, TOGGLE_FILTER,
        MATCH_DATE_FROM, RESET_DATE_FROM } from './actionTypes';
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

export const toggleFilter = (bool) => dispatch => {
    dispatch({
        type: TOGGLE_FILTER,
        payload: bool
    })
}

export const getFilterDateFrom = (date) => dispatch => {
    dispatch({
        type: MATCH_DATE_FROM,
        payload: date
    })
}

export const resetFilterDateFrom = () => dispatch => {
    dispatch({
        type: RESET_DATE_FROM,
        payload: null
    })
}