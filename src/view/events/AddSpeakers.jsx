import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import pegination from '../../controllers/pagination'
import {getAllUsers} from '../../features/auth/authSlice'
import { setModal } from '../../features/ui/uiSlice'
import { editEvent } from '../../features/event/eventSlice'
import PaginationSlider from './PaginationSlider'
import UserSlide from './UserSlide'
import CreateNewUser from '../inside/buttons/CreateNewUser'


const AddSpeakers = () => {

    const {eventData, eventRun, modal} = useSelector(state => state.ui)
    const {user, allUsers} = useSelector(state => state.auth)
     //console.log(allUsers)
    const [speakers, setSpeakers] = useState([])
    //const [ indexSpeaker, setIndexSpeaker ] = useState([])
    const [ videoRow, setVideoRow ] = useState(1)
    //const [count, setCount ] = useState(0)
    //console.log(eventData.eventList[eventRun.eventSlot])
    

    //const [newSpekers, setNewSpeakers] = useState([])

    const [ arr, setArr ] = useState([])

    const dispatch = useDispatch()
    
    useEffect(()=>{
      if(speakers.length === 0){
        setSpeakers(eventData.eventList[eventRun.eventSlot].speakers)
      }
      // if(modal.content !== "addspeakers"){
      //   setIndexSpeaker(modal.content.split(" ", 2)) // to find speaker index
      // }
      dispatch(getAllUsers())

    },[])

    useEffect(()=> {
      setVideoRow(allUsers.length)
      setArr(pegination( allUsers, 6))
      // if(modal.content.includes("speakers") || modal.content === "addspeakers"){
      //   setArr(pegination( allUsers, 6))
      // }
    },[allUsers, modal])

    //const register = () => dispatch(setModal({stat: true, content:"new user"}))

    
  return (
    <div className='editUsers' style={{width: "500px", justifySelf: "center"}}>
      <h3 className='podiumTitles'>Add  Speaker</h3>
      
        
          <p>
              {`Section Title: `}<span>{ eventData.eventList[eventRun.eventSlot ].title }</span> 
              {`,  Time:  `} <span>{ eventData.eventList[eventRun.eventSlot ].time }</span>{` minutes,  `}
              {` Type: `} <span>{ eventData.eventList[eventRun.eventSlot ].type }</span>
          </p>
        
      
      { arr && <PaginationSlider arr= { arr } users = {"UserSlide"} /> }
      
      <CreateNewUser />
        
      
          
    </div>
  )
}

export default AddSpeakers