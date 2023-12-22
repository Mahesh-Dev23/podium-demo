import React from 'react'
import {FaTimes} from 'react-icons/fa'
import { BiX } from "react-icons/bi"
import { useSelector, useDispatch } from 'react-redux'
import { setModal } from '../../features/ui/uiSlice'
import AddNewEvent from '../events/AddNewEvent'
import Events from '../events/Events'
import SelectDesign from './SelectDesign'
import CreateEvent from '../events/CreateEvent'
import AddSpeakers from '../events/AddSpeakers'
import EditEvent from '../events/EditEvent'
import EditEventSection from '../events/EditEventSection'
import Register from '../user/Register'
import ReplaceSpeaker from '../events/ReplaceSpeaker'
import EditUser from '../user/EditUser'
import DeleteUser from '../user/DeleteUser'
import DeleteEvent from '../events/DeleteEvent'
import Logout from '../user/Logout'



const Modal = () => {
    const dispatch = useDispatch()

    const modal = useSelector(state => state.ui.modal)
    const closeModal = () => {
        dispatch(setModal({stat:false, content: ''}))
    }
  return (
    
    modal.stat &&
    <div className='modalBack'>
      <div className='modal'>
          <button onClick={closeModal} className="btn modalbtn"><BiX /></button>
          { 
            modal && modal.content === "design" ?  <SelectDesign />
            : 
            modal.content === "select"?  <Events />
            : 
            modal.content === "create"?  <CreateEvent />
            :
            modal.content === "addspeakers" ? <AddSpeakers />
            :
            modal.content === "edit event" ? <EditEvent />
            :
            modal.content === "delete event" ? <DeleteEvent />
            :
            modal.content === "edit slot" ? <EditEventSection />
            :
            modal.content === "new user" ? <Register />
            :
            modal.content === "logout" ? <Logout />
            :
            modal.content.user === "user" ? <EditUser user ={modal.content.edit} />
            :
            modal.content.user === "delete" ? <DeleteUser user ={modal.content.edit} />
            :
            modal.content === "event slot prev" || modal.content === "event slot next" ? <AddNewEvent />
            :
            modal.content.includes("speakers")  ? <ReplaceSpeaker index={modal.content.replace("speakers ", "")}/>
            :null
          }
          
      </div>
    </div>
  )
}

export default Modal