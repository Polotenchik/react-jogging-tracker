import { TOGGLE_FILTER, MATCH_DATE_FROM, RESET_DATE_FROM } from '../actionTypes';

const initialState = {
    isFilterOn: false,
    dateFrom: null
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case TOGGLE_FILTER: 
            return { ...state, isFilterOn: !payload };
        case MATCH_DATE_FROM: 
            return { ...state, dateFrom: payload };
        case RESET_DATE_FROM: 
            return { ...state, dateFrom: payload };
        default:
            return state;
    }
}