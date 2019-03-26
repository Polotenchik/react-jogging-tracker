import { TOGGLE_FILTER } from '../actionTypes';

const initialState = {
    isFilterOn: false
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case TOGGLE_FILTER: 
            return { ...state, isFilterOn: !payload };
        default:
            return state;
    }
}