import axios from 'axios'
// import {setNewUser} from './authSlice'

const API_URL = '/api/users/'

const register = async (userData) =>{
    //console.log("registering")
    const response = await axios.post(API_URL, userData)

    if(response.data){
        //localStorage.setItem('user', JSON.stringify(response.data))
    }
    //return response.data
    //console.log(response.data)
}

// login User
const login = async (userData) =>{
    // console.log(userData)
    const response = await axios.post(API_URL + 'login' , userData)

    if(response.data){
        //localStorage.setItem('user', JSON.stringify(response.data))
        
    }
    return response.data
}


// logout user

const logout = () => {
    localStorage.removeItem('user')
}

// edit user

const editMe = async ( userData) => {
    //console.log("service ", userData)
    const response = await axios.put(API_URL + userData._id, userData)
    
    // if(response.data){
    //     localStorage.setItem('user', JSON.stringify(response.data))
    // }
    return response.data
}

// get all events
const getUsers = async ( token)=>{
    //console.log("all users")
    const config = {
        headers: {
            authorization : `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

// delete user
const deleteUser = async ( userId, token)=>{
    const config = {
        headers: {
            authorization : `Bearer ${token}`
        }
    }
    
    console.log("deleted")
    const response = await axios.delete(API_URL + userId, config)

    return response.data
    
}

const authService = { register, login, logout, editMe, getUsers, deleteUser }

export default authService