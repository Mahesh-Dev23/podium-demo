import React, {useState, useEffect} from 'react'
import { FaMoon, FaSun } from "react-icons/fa";
import { setMode } from '../../../features/ui/uiSlice';
import { useSelector, useDispatch } from 'react-redux'
import { BiMoon, BiSun } from "react-icons/bi"


const DarkToggle = () => {
    
    const { mode } = useSelector(state => state.ui)

    const dispatch  = useDispatch()

    const changeMode = () => {
        
        if(mode){
            dispatch(setMode(false))
        } else{
            dispatch(setMode(true))
        } 
    }
    

  return (
    <div className='btn  toggle' onClick={()=> changeMode()}>
        { mode ? <BiSun /> :  <BiMoon />}
    </div>
  )
}

export default DarkToggle