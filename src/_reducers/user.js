import { GET_USER } from "../config/constans";

const initState = {
  user: [],
  loading: false,
  error: null
};

const user = (state = initState, action) => {
  switch (action.type) {
    case `${GET_USER}_PENDING`:
      return {
        ...state,
        loading: true,
        error: null
      };
    case `${GET_USER}_FULFILLED`:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: null
      };
    case `${GET_USER}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default user;
