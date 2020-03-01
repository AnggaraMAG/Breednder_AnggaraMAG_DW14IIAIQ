import { GET_PETS } from "../config/constans";
import { API,setAuthToken} from "../config/api";

export const getPets = () => {
    return {
        type: GET_PETS,
        payload: async () => {
            const token = localStorage.getItem("token");
            setAuthToken(token)
            const res = await API.get('/pet');
            const { data } = res.data;
            // console.log("dataaaaaaaaaaaaaaaaaaaaa",data);
            return data;
        }
    }
}