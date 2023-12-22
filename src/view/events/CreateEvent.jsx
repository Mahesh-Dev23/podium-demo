import React, { useState, useEffect } from 'react'

import Input from '../../view/inside/Input'
//import AGM from '../../AGM.png'

import { toast } from 'react-toastify'

import { useSelector, useDispatch } from 'react-redux'
import { FaStamp} from 'react-icons/fa'
import { createNewEvent, reset, getAllEvents, getOneEvent } from '../../features/event/eventSlice'
import { setModal } from '../../features/ui/uiSlice'
import Button from '../inside/buttons/Button'
import Spinner from '../../view/user/Spinner'
import content from '../../content.json'



function NewEvent() {

  
  const eventTypes = [ "AGM", "Interview", "GroupDiscussion", "TownHall", "Classroom", "Q&A", "other" ]
  const [type, setType] = useState(eventTypes[0])
  const [ eventLists, setEventList] = useState([])
  const [ createdEvent, setCreatedEvent ] = useState()

  
  const {localUser} = useSelector(state => state.ui.localUser)
  const {user} = useSelector( state => state.auth )
  const { event, events, isError, isSuccess, isLoading, message } = useSelector( state => state.events )

  const dispatch = useDispatch()


  const day = new Date();

  const selected = {
    border: "1px solid rgba(var(--podium1), .5)",
    background: "rgba(255, 255, 255, .5)"
  }

  const [formData, setFormData] = useState({
    name:'',
    date:'',
    time:'',
    eventcat: 'AGM',
    eventHost:localUser?.name,
    eventList: [],
    status:'new'
  })

  const {name, date, time, eventcat, eventHost, eventList, status } = formData

  const setFormDetails = (e, n)=>{
        
    setFormData((prevState)=>({
        ...prevState,
       [ n ] : e
    }))
  }

  useEffect(()=>{
    setFormData((prevState)=>({
      ...prevState,
      eventcat : type.toString(),
      eventList: content.selectEventType[eventTypes.indexOf(type)][type].map( res => res)
  }))
    setEventList(content.selectEventType[eventTypes.indexOf(type)][type].map( res => res))
    
    
  },[type])
  
  useEffect(()=>{
    
    if(isError){
      toast.error(message)
    }

    if( isSuccess){
      
      dispatch(reset())
      
    }
    
      //dispatch(reset())

  },[ isError, isSuccess,  message,  dispatch ])

  if(isLoading){

    return <Spinner />
  }

  const setNewEvent = ()=> {
    dispatch(getAllEvents())
    events.map( res => console.log(res))

  }

  const onSubmit = (e) => {
    e.preventDefault()
    //console.log(formData)
    const newEvent = { name, date, time, eventcat, eventHost, eventList, status }
    
    dispatch( createNewEvent(newEvent) )
    dispatch( setModal({stat:false, content:''}))
    
    
  }

  console.log(type)
  //console.log("eventList ", eventLists)

  

  return (
      <>
        {/* <BackButton url={'/'} /> */}
        <section className='heading'>
          <h3 className='podiumTitles'>Create new Event</h3>
        </section>
        
          <form onSubmit={onSubmit} style={{maxWidth: "600px", margin:"0 auto"}}>
              
              
              <Input 
                type="text"
                id='name' 
                value={name}
                name='name'
                onClick={setFormDetails} 
                placeholder={name ? name : "Event Title"}
              />
              <p>Date and Time</p>
              <div className='inputTimeSlot'>

                <Input 
                  type="date"
                  id="date"
                  value={date}
                  name='date'
                  onClick={setFormDetails} 
                  placeholder={date ? date : "Date"}
                />
                <Input 
                  type="time"
                  id="time"
                  value={time}
                  name='time'
                  onClick={setFormDetails} 
                  placeholder={time ? time : "Time"}
                />
              </div>
              <p>Event Type</p>
              <div className='addPanelistItem '>
                
              { eventTypes.map( opt => 
                  <div className='radioCube' key={opt} id={opt} onClick={() => setType( opt )}
                    // style={ opt === type ? `${selected}` : '' }
                  >
                    <div  className = {`radioicon ${ type === opt && "radioiconSelected"}`}  >
                      <img src={`./${opt}.png`} width="100%"/>
                    </div>
                    <p >{opt}</p>
                  </div>
                    )}
                </div>
              
                  <button  style={{justifySelf:"center"}}>
                    <Button icon={<FaStamp />} text="Submit" direction="right"/>
                  </button>
              
          </form>
        
      
      </>
    
  )
}

export default NewEvent