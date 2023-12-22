import React from 'react'

import { Navigate, Outlet } from'react-router-dom'
import {useAuthStatus} from '../hooks/useAuthStatus'
import Spinner from '../view/user/Spinner'

const PrivateRoutes = () => {
    const log = true
    const { loggedIn, checkingStatus } = useAuthStatus()
    //console.log(loggedIn, 'Private Route')
    //console.log("private route")

    if(checkingStatus){
      return <Spinner />
    }

    return loggedIn ? <Outlet /> : <Navigate to='/' />
  
}

export default PrivateRoutes