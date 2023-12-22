import React, { useEffect, useState, useCallback} from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import updateEvent from '../../controllers/updateEvent'
import { editEvent } from '../../features/event/eventSlice'
import { setModal, setEvent } from '../../features/ui/uiSlice'
import CreateNewUser from '../inside/buttons/CreateNewUser'
import Speaker from './Speaker'

const UserSlide = ({userArr}) => {
  const {eventData, eventRun, modal, videotypes} = useSelector(state => state.ui)
  //console.log(userArr)
  //const [ currentSpeaker, setCurrentSpeaker ]  = useState({})
  const [ names, setNames ] = useState([])
  const [ speakers, setSpeakers ] = useState([])
  //const [ indexSpeaker, setIndexSpeaker ] = useState([])
  const [ videoRow, setVideoRow ] = useState(1)
  //console.log(eventData.eventList[eventRun.eventSlot])
  //const videotypes = { SingleVideo : 1, TwoVideos : 2, Presentation: 1, Multiscreen: 16 }

  const dispatch = useDispatch()
  //const navigate = useNavigate()

  const [newSpekers, setNewSpeakers] = useState([])
  const [newEventList, setNewEventList] = useState([])

  const currentIndex = 0

  useEffect(()=>{
    if( speakers && speakers.length === 0 ){
      setSpeakers(eventData.eventList[eventRun.eventSlot].speakers)
    }

    setNewEventList(eventData.eventList)

  },[])

  useEffect(()=> {
    if(!userArr) return
    if(eventData.eventList[eventRun.eventSlot].type === "Presentation") return setVideoRow(2)
    setVideoRow(userArr.length)
    
  },[userArr])

  useEffect(()=> { 
    let slelectedSpeakers = []
    if(speakers){
      speakers.map(res => slelectedSpeakers.push(res.name))
    } 
    setNewSpeakers(slelectedSpeakers)
    clickedUser()
    
  },[speakers])

  const clickedUser = () => {
    
    let names = []
    if( speakers !== undefined ) {
      speakers.map( res =>  names.push(res.name) )
    }

    setNames( names )
  }

  const addNewSpeakers = (e) => {
    //console.log(e)
    let setSpeakersList = []


    let speakerLength = videotypes[eventData.eventList[eventRun.eventSlot ].type]
    
    if(speakers === undefined || speakers.length === 0){
      console.log("zero")
      setSpeakersList.push(e)

    } else if(speakerLength === 1 && speakers.length === speakerLength ){
      console.log("one")
      setSpeakersList = []
      setSpeakersList.push(e)
    }

    if(speakerLength > 1 && speakers !== undefined && speakers.length !== 0 && speakerLength > speakers.length ){
      console.log("many")
      //setSpeakersList = []
      speakers.map( speaker => setSpeakersList.push(speaker) )
      setSpeakersList.push(e)
    }
    
    if(speakerLength > 1 && speakers !== undefined &&  speakerLength === speakers.length ){
      console.log("full")
      alert(`You have selected all ${speakerLength} speakers, click to unselect one of the selected names.` )
      //speakers.map( speaker => setSpeakersList.push(speaker) )
    }

    
    setSpeakers( setSpeakersList)

    // confirm speakers

    let changeList = newEventList[eventRun.eventSlot]
    changeList = {...changeList, speakers : setSpeakersList}

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
    dispatch(setModal({stat:false, content:""}))
    
  }

  const unSelectUser = (e) => {
    let speakers2 = []

     speakers.filter((res, index) => {
      if(names.indexOf(e) !== index){
        speakers2.push(res)
      }
     })
    setSpeakers( speakers2 )
  }

  // const ConfirmSpeakers = () => {
  //   let changeList = newEventList[eventRun.eventSlot]
  //   changeList = {...changeList, speakers : speakers}

  //   let editedList = []

  //   newEventList.filter( (res, index) => 
  //       {
  //         if(index === eventRun.eventSlot){
  //           editedList.push(changeList)
  //         }else{
  //           editedList.push(res)
  //         }
  //       }
  //     )
    
  //   const updatedEvent = updateEvent(eventData, "eventList", editedList)
  //   dispatch(setEvent(updatedEvent))    
  //   dispatch(setModal({stat:false, content:""}))
  // }
    
    // const addNewUser = () => {
    //   dispatch(setModal({stat: false, content: ""}))
    //   //dispatch(setModal({stat: true, content: "new user"}))
    //   navigate('/reg')
    // } 

  console.log(speakers)
  //console.log(slelectedSpeakers)
  return (
    userArr ? 
    <>
      <div className="itext">
        Select from the list or create new.
      </div>
      <div className='editUsers' style={{gridTemplateColumns:videoRow === 1 ? `100%` : `50% 50%`}}>
        {
          userArr.map( user => 
            <>
            {
              
              names && names.includes(user.name) ? 
              <div className='slideTitle' key={user._id} 
                  onClick={()=> unSelectUser(user.name)}
                  style={{justifyContent:"start", alignSelf:"stretch", padding: "10px", opacity: '.5'}}
              >
                  <Speaker user={user} name={true} />
              </div>
              :
              <div className='slideTitle' key={user._id} 
                  onClick={()=> addNewSpeakers(user)}
                  style={{justifyContent:"start", alignSelf:"stretch", padding: "10px"}}
              >
                  <Speaker user={user} name={false} />
              </div>
            }
            </>
          )
            
            
        }
        
      </div>
        
    </>
    : null
  )
}

export default UserSlide