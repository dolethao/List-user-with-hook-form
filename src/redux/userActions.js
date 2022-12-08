import {
    allUsersRedux,
    deleteUser,
    editUserSuccess,
    saveNewUser,
    aUserRedux,
    clearData,
    allowLoading,
    rejectLoading,
} from './reducer'
import {
    getAllUsers,
    deleteAUser,
    addNewUser,
    EditUser,
    getAUser
} from '../services/userServices';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const getAllUsersRedux = () => {
    return async (dispatch) => {
        try {
            let res = await getAllUsers();
            dispatch(allowLoading())
            if (res?.data?.items && res?.status === 200) {
                let users = res.data.items
                dispatch(fetchDataUsers(users.reverse()))
            }
            dispatch(rejectLoading())
        } catch (error) {
            console.log(error)
            dispatch(rejectLoading())
        }
    }
}
export const fetchDataUsers = (users) => {
    return (dispatch) => {
        dispatch(allUsersRedux(users))
    }
}
export const getAUsersRedux = (id) => {
    return async (dispatch) => {
        try {
            let res = await getAUser(id);
            dispatch(allowLoading())
            if (res?.data && res.status === 200) {
                let user = res.data
                dispatch(fetchAUser(user))
            }
            dispatch(rejectLoading())
        } catch (error) {
            console.log(error)
            dispatch(rejectLoading())
        }
    }
}

export const clearDataUsers = () => {
    return (dispatch) => {
        dispatch(clearData())
        dispatch(allowLoading())
    }
}
export const fetchAUser = (user) => {
    return (dispatch) => {
        dispatch(aUserRedux(user))
    }
}
export const deleteUserRedux = (userId) => {
    return async (dispatch) => {
        try {
            let res = await deleteAUser(userId)
            dispatch(allowLoading())
            if (res && res.status === 200) {
                dispatch(deleteUser(userId));
            }
            dispatch(getAllUsersRedux())
            toast.success("Delete user success")
        } catch (error) {
            console.log(error)
            dispatch(allowLoading())
            toast.error("Delete user failed")
        }
    }
}

export const createNewUserRedux = (data) => {
    return async (dispatch) => {
        try {
            let res = await addNewUser(data)
            dispatch(allowLoading())
            if (res && res.status === 200) {
                dispatch(saveNewUser())
            }
            dispatch(getAllUsersRedux())
            toast.success("Created user success")
        } catch (error) {
            console.log(error)
            dispatch(allowLoading())
            toast.error("Created user failed")
        }
    }
}
export const updateAUserRedux = (data, id) => {
    return async (dispatch) => {
        try {
            let res = await EditUser(id, data)
            dispatch(allowLoading())
            if (res && res.status === 200) {
                dispatch(editUserSuccess())
            }
            dispatch(getAllUsersRedux())
            toast.success("Update user success")
        } catch (error) {
            console.log(error)
            dispatch(allowLoading())
            toast.error("Update user failed")
        }
    }
}