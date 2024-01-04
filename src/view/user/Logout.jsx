import React, {  useEffect } from 'react'
import Button from '../inside/buttons/Button'
import { FaUnlockAlt } from "react-icons/fa"
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useSocket } from '../../hooks/useSocket'

import { setMessageStack } from '../../features/ui/uiSlice'

import { io } from "socket.io-client"
// const socket = io(process.env.backEnd_Url)
const socket = io('https://podium-backend.vercel.app')

const Logout = () => {
    const { packageJson, logout } = useSelector( state => state.ui )
    const { user } = useSelector( state => state.auth )
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // console.log("18", logout)

    useEffect(()=>{
        // console.log("Socket Logout 66", logout)
        if(logout.stat && logout.content !== '') {
            socket.emit('logout', {name:user.name, msg: logout.content} )
            // console.log("Socket Logout ", logout)
        }
        
    },[logout])

    // useEffect(()=>{
    //     //  console.log(msgStack)
    //     dispatch(setMessageStack(msgStack))
    //     // setNewMessage({})
    //    },[msgStack])


  return (
    <div className='podium' >
        <div className='joinCall' >
            <div className='podiumPackage'>
                <img src="podium-logo.png" alt="podium-logo"/>
                <p>{packageJson?.package.description}</p>
                <p className='itext'>{packageJson?.package.version}</p>
            </div>

            <p>Are you sure that you want to log out?</p>
            {/* <button type='submit' >
                <Button icon={<FaUnlockAlt />} text="Logout" direction="right"/>
            </button> */}
            <button onClick={() => navigate('/')} className="btn btn-round" ><FaUnlockAlt /></button>

        </div>
    </div>        
  )
}

export default Logout