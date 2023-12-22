import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import pegination from '../../controllers/pagination'
import {getAllUsers} from '../../features/auth/authSlice'
import { setModal } from '../../features/ui/uiSlice'



import PaginationSlider from './PaginationSlider'

const ReplaceSpeaker = () => {

    const { eventData, eventRun, modal } = useSelector(state => state.ui)
    const { event } = useSelector(state => state.events)
    const { allUsers} = useSelector(state => state.auth)
     //console.log(allUsers)
    // const [ speakers, setSpeakers ] = useState([])
    // const [ indexSpeaker, setIndexSpeaker ] = useState([])

    const [ arr, setArr ] = useState([])

    const dispatch = useDispatch()
    const navigate = useNavigate()

    // console.log(eventData)

    useEffect(()=>{
        // if(Object.keys(eventData).length !== 0){

        //     setSpeakers(eventData.eventList[eventRun.eventSlot].speakers)
        // }
        dispatch(getAllUsers())
      },[])
  
    useEffect(()=> {
        //setVideoRow(allUsers.length)
        setArr(pegination( allUsers, 6))
        
        if(modal.content.includes("speakers") || modal.content === "addspeakers"){
          setArr(pegination( allUsers, 6))
        }
      },[allUsers, modal])

    // console.log(eventData)  

    const register = () => navigate('/reg')

  return (
    <div style={{width: "500px", justifySelf: "center"}}>
      <h3 className='podiumTitles'>Replace </h3>
        { arr ?
          <PaginationSlider arr= { arr } users = {"UserReplace"} />
          :
          <div className="btn" onClick={()=> register()}>Register New Speaker </div>
        }
          
    </div>
  )
}

export default ReplaceSpeaker