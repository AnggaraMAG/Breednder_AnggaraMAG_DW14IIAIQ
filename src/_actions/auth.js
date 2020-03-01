// import axios from "axios";
import {  LOGIN, REGISTER, } from "../config/constans";
import { API} from "../config/api";

// export const getAuth = () => {
//     // CHECK AUTH TOKEN
//     const token = localStorage.getItem("token");
//     if (token) {
//         //// cek token from server
//         return {
//             type: GET_AUTH,
//             payload: async () => {
//                 setAuthToken(token);
//                 const res = await API.get('/autoauth');
//                 return res.data.data
//             }
//         };
//     } else {
//         ////redirect to login page
//         return {
//             type: LOGOUT,
//             payload: {}
//         }
//     }
// };

export const login = data => {
    return {
        type: LOGIN,
        payload: async () => {
            const res = await API.post("/login", data);
            localStorage.setItem("token", res.data.token);
            // console.log("ressss", res.data.data);
            return res.data.data;
        }
    };
};

export const register = data => {
    console.log(`input dataaaaaaaaaaaaaaaadata`, data);
    return {
        type: REGISTER,
        payload: async () => {
            const res = await API.post("/register", data);
            localStorage.setItem("token", res.data.token);
            // localStorage.setItem("email",res.data.data.email);
            // localStorage.setItem("userId",res.data.data.id);
            return res.data.data;
        }
    }
}