import { TOGGLE_FILTER, MATCH_DATE_FROM, RESET_DATE_FROM,
         MATCH_DATE_TO, RESET_DATE_TO, SET_DEFAULT_DATES  } from '../actionTypes';

const initialState = {
    isFilterOn: false,
    dateFrom: null,
    dateTo: null
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case TOGGLE_FILTER: 
            return { ...state, isFilterOn: !payload };
        case MATCH_DATE_FROM: 
            return { ...state, dateFrom: payload };
        case RESET_DATE_FROM: 
            return { ...state, dateFrom: payload };
        case MATCH_DATE_TO:
            return { ...state, dateTo: payload };
        case RESET_DATE_TO:
            return { ...state, dateTo: payload };
        case SET_DEFAULT_DATES:
            return { ...state, dateTo: payload, dateFrom: payload }
        default:
            return state;
    }
}