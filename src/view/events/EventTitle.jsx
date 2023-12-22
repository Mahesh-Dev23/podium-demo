import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { getAllEvents, singleEvent, oneEvent } from '../../features/event/eventSlice'
import { setModal, setEvent } from '../../features/ui/uiSlice'

import { BiUser, BiPencil, BiTrash } from "react-icons/bi"
import { FaPen, FaTrash } from 'react-icons/fa'

const EventTitle = ({userArr}) => {
    const dispatch = useDispatch()

    //console.log(events)

    useEffect(()=>{
        dispatch(getAllEvents())
    }, [dispatch])

    

    const selectEvent = (e) => {
      // console.log(e)
      dispatch( singleEvent( e._id ) )
      dispatch( oneEvent( e.name ) ) 
      dispatch( setModal( {stat: false, content: ""} ) )
      //navigate('/design')
    }

    

    const eventEdits = (e) => {
      // console.log("eventItem", event)
      dispatch( setEvent( e ) )
      dispatch( singleEvent( e._id ) )
      dispatch( setModal({stat: true, content: "edit event"}) )
    }
  
    const eventDelete = (e) => {
      // console.log(e)
      dispatch( setEvent( e ) )
      dispatch( singleEvent( e._id ) )
      dispatch( setModal({stat: true, content: "delete event"}) )
    }

  return (
    <div className="eventpanel" >
          {
            userArr && userArr.map( event =>
              <div className='card' key={event._id}>
                <div className='eventDetails' onClick={() => selectEvent(event)}>
                  <p className='eventTitle'>{event.name}</p>
                  <p className='eventTime'> {`${event.date} `}<span>{event.time}</span></p>
                </div>
                <div className="editBlock">
                    <div  className='btn-round' 
                          onClick={() => eventEdits(event)}>
                      <BiPencil />
                    </div>
                    <div  className='btn-round' 
                          onClick={() => eventDelete(event)}>
                      <BiTrash />
                    </div>
                </div> 
              </div>)
          }
        </div>
  )
}

export default EventTitle