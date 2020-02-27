import axios from 'axios';

export const API = axios.create({
    baseURL: "http://localhost:5000/api/v1"
});
// console.log(`########################${API}`);
export const setAuthToken = token => {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};