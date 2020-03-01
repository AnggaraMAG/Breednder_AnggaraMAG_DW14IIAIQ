import { GET_PETS } from "../config/constans";

const initialState = {
    data: [],
    currentPet:{},
    loading: false,
    error: null
};

const pet = (state = initialState, action) => {
    switch (action.type) {
        case `${GET_PETS}_PENDING`:
            return {
                ...state,
                loading: true,
                error: null
            };
        case `${GET_PETS}_FULFILLED`:
            return {
                ...state,
                data: action.payload,
                currentPet: action.payload[0],
                loading: false,
                error:null,
            };
        case `${GET_PETS}_REJECTED`:
            return {
                ...state,
                loading: false,
                error: true,
            };
        default:
            return state;
    }
}
export default pet;