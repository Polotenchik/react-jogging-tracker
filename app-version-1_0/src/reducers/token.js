import { FETCH_TOKEN_SUCCESS } from '../actionTypes';

const initialState = {};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_TOKEN_SUCCESS:
            return { ...state, token: payload.response };
        default:
            return state;
    }
}
