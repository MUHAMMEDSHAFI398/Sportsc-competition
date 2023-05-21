import axios from "../axios";

export const registrationAPI = (data) => {
    return axios.post('/register', data)
}