import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { deleteEvent, reset } from '../../features/event/eventSlice'
import { setModal } from '../../features/ui/uiSlice'
import Button from '../inside/buttons/Button'
import { FaCheck, FaLongArrowAltLeft, FaExclamation } from 'react-icons/fa'

function DeleteEvent() {
  
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const  {eventData}  = useSelector( state => state.ui )
    // const { event } = useSelector( state => state.events)
    //console.log("Delete Event ", event)

    const eventDelete = ()=> {
        dispatch(deleteEvent(eventData._id))
        dispatch( setModal( {stat: false, content: ""} ) )
    }

  return (
    < >
        <h3 className='podiumTitles'>Are you sure about deleting this event?</h3>
        <div style={{height: "30px", justifySelf:"stretch"}}></div>
        <div className='title' > 
            <h3 className='podiumTitles' >{eventData ? eventData.name : '' } </h3>          
            <Button icon={<FaExclamation />} text="Edit" direction="right" />
        </div>
        <div style={{height: "30px", justifySelf:"stretch"}}></div>
       
        <button type='submit' onClick={eventDelete} style={{justifySelf:"center"}}>
            <Button icon={<FaCheck />} text="Delete" direction="right"/>
        </button>
                    
    </>
  )
}

export default DeleteEvent