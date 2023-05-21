import axios from "../axios";

export const registrationAPI = (data) => {
    return axios.post('/register', data)
}

export const getParticipantsAPI = () => {
    return axios.get('/participants')
}

export const AddResultAPI = (data) => {
    return axios.post('/add-result', data)
}

export const getResultAPI = () => {
    return axios.get('/get-result')
}