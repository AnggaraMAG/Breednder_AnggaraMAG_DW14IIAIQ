import { GET_AUTH,LOGIN,REGISTER } from "../config/constans";
const initState = {
    authenticated: false,
    user: null,
    loading: false,
    error: null
};

const auth = (state = initState, action) => {
    switch (action.type) {
        case `${GET_AUTH}_PENDING`:
            return {
                ...state,
                loading: true
            };
        case `${GET_AUTH}_FULFILLED`:
            console.log("payload", action.payload);
            return {
                ...state,
                data: action.payload,
                loading: false
            };
        case `${GET_AUTH}_REJECTED`:
            console.log("payload", action.payload);
            return {
                ...state,
                loading: false,
                isError: true
            };
        case `${LOGIN}_PENDING`:
            return {
                ...state,
                loading: true,
                error: null
            };
        case `${LOGIN}_FULFILLED`:
            return {
                ...state,
                authenticated: true,
                user: action.payload,
                loading: false,
                error: null
            };
        case `${LOGIN}_REJECTED`:
            return {
                ...state,
                loading: false,
                error: action.payload.response.data.message
            };
        case `${REGISTER}_PENDING`:

            return {
                ...state,
                isLoading: true
            };
        case `${REGISTER}_FULFILLED`:
            return {
                ...state,
                data: [...state.data, action.payload],
                isLoading: false
            };
        case `${REGISTER}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        default:
            return state;
    }
};

export default auth;