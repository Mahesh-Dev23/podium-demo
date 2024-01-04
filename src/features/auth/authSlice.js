import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'

import authService from './authService'
// import {store} from '../../../src/app/store'
// import { useSelector, useDispatch } from 'react-redux'
// import { setLocalUser } from '../../features/ui/uiSlice'

// const dispatch = useDispatch()

//const user = JSON.parse(localStorage.getItem('user'))
    
const initialState = {
    user: null,
    allUsers: [],
    updateUser: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message:''

}

// register new user
export const register = createAsyncThunk('auth/register', 
    async ( user, thunkAPI)=> {
        //console.log("registered")
        //console.log(user)
       try{
            return await authService.register(user)
       }catch (error){
            const message = (error.response && error.response.data && error.response.data.message ) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
       }

})

//Login user
export const login = createAsyncThunk('auth/login', 
    async ( user, thunkAPI)=> {
        //console.log("Logged In")
        // console.log("auth slice", user)
        try{
            return await authService.login(user)
        }catch (error){
            const message = (error.response && error.response.data && error.response.data.message ) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }

})

//Edit user
export const editUser = createAsyncThunk('auth/edit', 
    async (  userData, thunkAPI)=> {
        //console.log("Edited")
        //console.log( "slice ",  userData)
        try{
            return await authService.editMe( userData)
        }catch (error){
            const message = (error.response && error.response.data && error.response.data.message ) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }

})

// Delete user

export const deleteUser = createAsyncThunk( 'auth/delete', 
    async ( userId, thunkAPI)  => {
        
        try{
            const token = thunkAPI.getState().auth.user.token
            return await authService.deleteUser( userId, token )
        }catch (error){
            const message = (error.response && error.response.data && error.response.data.message ) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }

})

// // get single user for edit
// export const getSingalUser = ('auth/get', 
//     async ( userId, thunkAPI)  => {
            
//         try{
//             const token = thunkAPI.getState().auth.user.token
//             return await authService.editMe( userId, token )
//         }catch (error){
//             const message = (error.response && error.response.data && error.response.data.message ) || error.message || error.toString()
//             return thunkAPI.rejectWithValue(message)
//         }

// })


// Logout user
export const logout = createAsyncThunk('auth/logout', async () => {
    return await authService.logout()
})


// Get All user

export const getAllUsers = createAsyncThunk( 'auth/getAll', 
    async ( _, thunkAPI)  => {

        try{
            const token = thunkAPI.getState().auth.user.token
            return await authService.getUsers( token )
        }catch (error){
            const message = (error.response && error.response.data && error.response.data.message ) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }

})


export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        reset : (state)=>{
            state.isLoading = false
            state.isSuccess = false
            state.message = ''
            state.isError = false

        },
        // setNewUser : (state, action) => {
        //     const loggedUser = store.getState()
        //     const newuser = loggedUser.uiSlice.localUser
        //     state.user = newuser
        // },
        //setNewUser : (state, action) => {state.user = action.payload},
    },
    extraReducers: (builder) => {
        builder
        .addCase(register.pending, (state)=> {
            state.isLoading = true
        })
        .addCase(register.fulfilled, (state, action)=> {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(register.rejected, (state, action)=> {
            state.isLoading = false
            state.isSuccess = true
            state.message = action.payload
            state.user = null
        })
        .addCase(login.pending, (state)=> {
            state.isLoading = true
        })
        .addCase(login.fulfilled, (state, action)=> {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(login.rejected, (state, action)=> {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })
        .addCase(logout.fulfilled, (state)=> {
            
            state.user = null
        })
        .addCase(editUser.pending, (state)=> {
            state.isLoading = true
        })
        .addCase(editUser.fulfilled, (state, action)=> {
            state.isLoading = false
            state.isSuccess = true
            state.updateUser = action.payload
            
        })
        .addCase(editUser.rejected, (state, action)=> {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.updateUser = {}
        })
        .addCase( getAllUsers.pending, (state)=>{
            state.isLoading = true
        })
        .addCase( getAllUsers.fulfilled, (state, action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.allUsers = action.payload
           
        })
        .addCase( getAllUsers.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase( deleteUser.pending, (state)=>{
            state.isLoading = true
        })
        .addCase( deleteUser.fulfilled, (state)=>{
            state.isLoading = false
            state.isSuccess = true
        })
        .addCase( deleteUser.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }
})

export const {reset, setNewUser} = authSlice.actions
export default authSlice.reducer