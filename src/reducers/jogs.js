import { FETCH_JOGS_SUCCESS } from '../actionTypes';

const initialState = {};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_JOGS_SUCCESS:
            return { ...state, jogs: payload.response.jogs };
        default:
            return state;
    }
}