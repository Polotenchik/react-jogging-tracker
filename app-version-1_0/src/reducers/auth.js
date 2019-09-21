import { USER_AUTH } from '../actionTypes';

const initialState = {};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_AUTH: 
            return { ...state, isAuth: payload };
        default:
            return state;
    }
}