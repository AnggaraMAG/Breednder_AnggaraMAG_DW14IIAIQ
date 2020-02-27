import axios from "axios";
import { GET_AUTH, LOGIN, REGISTER } from "../config/constans";
import { API } from "../config/api";

export const getAuth = () => {
    // CHECK AUTH TOKEN
    const token = localStorage.getItem("token");
    if (token) {
        //// cek token from server
    } else {
        ////redirect to login page
    }
    return {
        type: GET_AUTH,
        payload: async () => {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users");
            console.log("ressss", res.data);
            return res.data;
        }
    };
    //   return dispatch => {
    //     setTimeout(() => {
    //       dispatch({
    //         type: "GET_USERS",
    //         payload: {}
    //       });
    //     }, 3000);
    //   };

    //   return {
    //     type: "GET_USERS",
    //     payload: {}
    //   };
};

export const login = data => {
    // console.log("data action loginnnnn", data);
    return {
        type: LOGIN,
        payload: async () => {
            const res = await API.post("/login", data);
            // console.log("ressss", res.data.data);
            return res.data.data;
        }
    };
};

export const register = data => {
    return {
        type: REGISTER,
        payload: async () => {
            const res = await API.post("/register", data);
            return res.data.data;
        }
    }
}