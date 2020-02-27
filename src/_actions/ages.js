import { GET_AGES } from "../config/constans";
import { API } from "../config/api";

export const getSpecies = () => {
    return {
        type: GET_AGES,
        payload: async () => {
            const res = await API.get("/species");
            const {data} = res.data;
            return data;
        }
    }
}