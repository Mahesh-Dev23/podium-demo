import React from 'react'
import { FaUser, FaUserCheck, FaUserAltSlash, FaUserPlus } from 'react-icons/fa'
import {  useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { setModal } from '../../../features/ui/uiSlice'

const CreateNewUser = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const addNewUser = () => {
        dispatch(setModal({stat: false, content: ""}))
        navigate('/reg')
      }

  return (
    <div className="user" 
      onClick={()=> addNewUser()} 
      style={{justifySelf:"center"}}
    >
       <FaUserPlus />
    </div>
  )
}

export default CreateNewUser