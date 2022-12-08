import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL,
    // https://637ddaebcfdbfd9a639ed530.mockapi.io/api/v1
})
export default instance;