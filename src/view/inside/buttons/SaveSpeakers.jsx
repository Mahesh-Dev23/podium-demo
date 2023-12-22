import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import updateEvent from '../../../controllers/updateEvent'
import { setEvent } from '../../../features/ui/uiSlice'

const SaveSpeakers = ({newEventList, currentSpeakers}) => {
    const {eventData, eventRun} = useSelector(state => state.ui)
    const dispatch = useDispatch()

    const ConfirmSpeakers = () => {

        let changeList = newEventList[eventRun.eventSlot]
        changeList = {...changeList, speakers : currentSpeakers}
  
        let editedList = []
  
        newEventList.filter( (res, index) => 
            {
              if(index === eventRun.eventSlot){
                editedList.push(changeList)
              }else{
                editedList.push(res)
              }
            }
          )
  
        const updatedEvent = updateEvent(eventData, "eventList", editedList)
        dispatch(setEvent(updatedEvent))    
      }
  return (
    <div className="btn btn-round" 
                  onClick={()=> ConfirmSpeakers()} 
            >
                  Save <FaCheck />
    </div>
  )
}

export default SaveSpeakers