import { GET_USER } from "../config/constans";
import { API,setAuthToken} from "../config/api";

export const getUser = () => {
    return {
        type: GET_USER,
        payload: async () => {
            const token = localStorage.getItem("token");
            setAuthToken(token)
            const res = await API.get('/user');
            const {data}  = res.data;
            console.log("dataaaaaaaa loginnnnn",data)
            // console.log("dataaaaaaaaaaaaaaaaaaaaa",data);
            return data;
        }
    }
}