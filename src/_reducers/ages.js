import { GET_AGES } from "../config/constans";

const initialState = {
    data: [],
    loading: false,
    error: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case `${GET_AGES}_PENDING`:
            return {
                ...state,
                loading: true
            };
        case `${GET_AGES}_FULFILLED`:
            return {
                ...state,
                data: action.payload,
                loading: false
            };
        case `${GET_AGES}_REJECTED`:
            return {
                ...state,
                loading: false,
                error: true
            };
        default:
            return state;
    }
}
export default reducer;