import React, {useState, useEffect} from 'react'

import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { deleteUser } from '../../features/auth/authSlice'
import { setModal } from '../../features/ui/uiSlice'
import Button from '../inside/buttons/Button'
import { FaCheck, FaLongArrowAltLeft, FaExclamation } from 'react-icons/fa'
import { BiCheckCircle, BiErrorCircle } from "react-icons/bi"
import Input from '../inside/Input'

const DeleteUser = ({user}) => {

    const dispatch = useDispatch()

    const eventDelete = ()=> {
        dispatch(deleteUser(user._id))
        dispatch( setModal( {stat: false, content: ""} ) )
    }

  return (
    <>
        <h3 className='podiumTitles'>{`Are you sure about deleting ${user.name}?`}</h3>
        <div style={{height: "30px", justifySelf:"stretch"}}></div>
        <div className='title' > 
            <h3 className='podiumTitles' >{user ? user.name : '' } </h3>          
            <Button icon={<BiErrorCircle />} text="Edit" direction="right" />
        </div>
        <div style={{height: "30px", justifySelf:"stretch"}}></div>
       
        <button type='submit' onClick={eventDelete} style={{justifySelf:"center"}}>
            <Button icon={<BiCheckCircle />} text="Delete" direction="right"/>
        </button>
    </>
  )
}

export default DeleteUser