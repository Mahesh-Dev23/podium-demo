import React from 'react'
import { FaUserPlus } from 'react-icons/fa'
import { BiUserPlus } from "react-icons/bi"
import { useSelector, useDispatch } from 'react-redux'


import { setModal } from '../../../features/ui/uiSlice'

const AddUser = () => {
    const {eventData, eventRun} = useSelector(state => state.ui)
    const dispatch = useDispatch()

    const addSpeakers = (e) => {
        dispatch(setModal({stat:true, content:'addspeakers'}))
      }

  return (
    <div className="user" 
        onClick={() => addSpeakers(eventRun.eventSlot)} 
        style={{justifySelf:"center"}}
    >
          <BiUserPlus />
    </div>
  )
}

export default AddUser