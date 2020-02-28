// import axios from "axios";
import { GET_AUTH, LOGIN, REGISTER, LOGOUT } from "../config/constans";
import { API,setAuthToken } from "../config/api";

export const getAuth = () => {
    // CHECK AUTH TOKEN
    const token = localStorage.getItem("token");
    if (token) {
        //// cek token from server
        return {
            type:GET_AUTH,
        payload: async () => {
            setAuthToken(token);
            const res = await API.get('/autoauth');
            return res.data.data
        }
        };        
    } else {
        ////redirect to login page
        return {
            type:LOGOUT,
            payload:{}
        }
    }
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
    console.log(`input dataaaaaaaaaaaaaaaadata`,data);
    return {
        type: REGISTER,
        payload: async () => {
            const res = await API.post("/register", data);
            localStorage.setItem("token",res.data.token);
            // localStorage.setItem("email",res.data.data.email);
            // localStorage.setItem("userId",res.data.data.id);
            return res.data.data;
        }
    }
}