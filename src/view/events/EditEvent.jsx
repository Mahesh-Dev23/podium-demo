import React, {useState, useEffect} from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { FaCheck } from "react-icons/fa"

import { getAllUsers } from '../../features/auth/authSlice'
import { editEvent , reset } from '../../features/event/eventSlice'

import { setModal } from '../../features/ui/uiSlice'
import Button from '../inside/buttons/Button'




function EditEvent() {
  const  {eventData}  = useSelector( state => state.ui )
  const users = useSelector( state => state.auth )
  const [ allUsers, setAllUsers ] = useState(users.allUsers)
  
  //  console.log("edit event ", event)
  const [ updateEvent, setUpdateEvent ] = useState( eventData ? eventData  : '' )
  const [ title, setTitle ] = useState('')
  const [ day, setDate ] = useState('')
  const [ tim, setTime ] = useState('')
  
  const dispatch = useDispatch()
  
  
  useEffect(()=>{
    if(eventData){
      
      setTitle(eventData.name)
      setDate(eventData.date)
      setTime(eventData.time)
    }
    setUpdateEvent(eventData)

    if(!users && !users.user.isAdmin ) return 
    
    dispatch(getAllUsers())

  },[ eventData])

  useEffect(()=>{
    setAllUsers(users.allUsers)
  }, [users])

  useEffect(()=>{
    
    setUpdateEvent((prevState)=>({
      ...prevState,
      name: title,
      date: day,
      time: tim
    }))

  },[title, day, tim])


   


  const onSubmit = (e)=> {
    e.preventDefault()
    dispatch(editEvent(updateEvent))
    dispatch( setModal( {stat:false, content:''} ) )
  }
  
  



  return (
    <div >
        <h3 className='podiumTitles'>Edit : {eventData ? eventData.name : ''}</h3>

        <form onSubmit={onSubmit} style={{maxWidth: "400px", margin:"0 auto"}}>
          
            <input 
                
                type={"text"} 
                name= "title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
          
          
            <input 
                label="Date"
                type={"date"} 
                name= "date"
                value={day}
                onChange={ e => setDate(e.target.value)}
            />
          
            <input 
                label="Time"
                type={"time"} 
                name= "time"
                value={tim}
                onChange={ e => setTime(e.target.value)}
            />
          

          
            <button type='submit' style={{justifySelf:"center"}}>
              <Button icon={<FaCheck />} text="Save" direction="right" />
            </button>
          
        </form>
        
    </div>
  )
}

export default EditEvent