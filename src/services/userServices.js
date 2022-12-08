import axios from './axios'

const getAllUsers = () => {
    return axios.get(`/users`)
}
const getAUser = (id) => {
    return axios.get(`/users/${id}`)
}

const deleteAUser = (userId) => {
    return axios.delete(`/users/${userId}`)
}
const addNewUser = (data) => {
    return axios.post('/users', data)
}

const EditUser = (inputData, id) => {
    return axios.put(`/users/${id}`, inputData)
}


export { getAllUsers, deleteAUser, addNewUser, EditUser, getAUser }