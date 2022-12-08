import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allUsers: [],
    aUser: {},
    loading: true
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getAllUsersStart: (state, action) => {

        },
        allUsersRedux: (state, action) => {

            state.allUsers = action.payload
        },
        clearData: (state) => {
            state.aUser = {}
        },
        aUserRedux: (state, action) => {

            state.aUser = action.payload
        },
        deleteUser: (state, action) => {


        },
        saveNewUser: (state, action) => {


        },
        editUserSuccess: (state, action) => {


        },
        allowLoading: (state, action) => {
            state.loading = true
        },
        rejectLoading: (state, action) => {
            state.loading = false
        }
    },
})

export const { getallUsers,
    allUsersRedux,
    deleteUser,
    saveNewUser,
    editUserSuccess,
    aUserRedux,
    clearData,
    allowLoading,
    rejectLoading
} = usersSlice.actions

export default usersSlice.reducer