import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaPen, FaChartBar, FaTimes, FaCheck } from 'react-icons/fa'
import { BiX } from "react-icons/bi"
import { setModal, setEvent } from '../../features/ui/uiSlice'
import { editEvent } from '../../features/event/eventSlice'
import Speaker from './Speaker'
import CreateNewUser from '../inside/buttons/CreateNewUser'
import updateEvent from '../../controllers/updateEvent'
import AddUser from '../inside/buttons/AddUser'
import SaveSpeakers from '../inside/buttons/SaveSpeakers'
import PresentationSpeaker from './PresentationSpeaker'
import { useUpdateDeleteSpeakers } from '../../hooks/useUpdateDeleteSpeakers'

const EditSpeakers = () => {
    const {eventData, eventRun, videotypes} = useSelector(state => state.ui)
    
    const [ currentSpeakers, setCurrentSpeakers ] = useState([])
    const [ currentUserNames, setCurrentUserNames ] = useState([])
    //const [ newEventList, setNewEventList ] = useState([])
    const [ speakers, setSpeakers ] = useState([])
    const [ selectOne, setSelectOne ] = useState('')
    const  newEventList  =  useUpdateDeleteSpeakers(speakers, selectOne, eventData, eventRun)
    const dispatch = useDispatch()

    const [ videoRow, setVideoRow ] = useState(1)
   
    //console.log(eventData)
    
    // div elements for videos as per speakers list length ------------------
  
    const videoRowLength = async () => {
      
      if(currentSpeakers?.length === 0) return setVideoRow(1) 

      if(eventData.eventList[eventRun.eventSlot].typr === "Presentation") return setVideoRow(2) 

      if( currentSpeakers?.length > 2 ) {
        setVideoRow( Math.round( currentSpeakers?.length / 2 ))
      } else{
        setVideoRow( currentSpeakers?.length)
      }
    }
   

    
    useEffect(()=> {
        if(Object.keys(eventData).length !== 0 && eventRun){
          setCurrentSpeakers(eventData.eventList[eventRun.eventSlot].speakers) 
          //setNewEventList(eventData.eventList) 
        }
        setSpeakers(eventData.eventList[eventRun.eventSlot].speakers)
    },[eventData, eventRun])

    useEffect(()=> {  
      let names = []
      
      speakers?.length > 0 && speakers.map( (res) =>{ names.push(res.name) })
      setCurrentUserNames(names)

    },[speakers])

    useEffect(()=> {  
      videoRowLength() 
      let names = []
      currentSpeakers?.length > 0 && currentSpeakers.map( (res) =>{ names.push(res.name) })
      setCurrentUserNames(names)
    },[currentSpeakers])

    useEffect(()=>{
        
      if( selectOne === '' && newEventList === undefined || newEventList.length === 0)return
      console.log(newEventList)
      const updateThisEvent = updateEvent(eventData, "eventList", newEventList)
      //       //console.log(updateThisEvent)
      dispatch(setEvent(updateThisEvent))
      setSpeakers(newEventList[eventRun.eventSlot].speakers)
      
    },[selectOne])

    // const addSpeakers = (e) => {
    //   dispatch(setModal({stat:true, content:'addspeakers'}))
    // }

    const changeSpeaker = (e) => {
      let i = 0
      console.log(e)
      console.log(currentSpeakers)
      
      if(currentUserNames.length === 0 )return
      dispatch(setModal({stat:true, content:`speakers ${ currentUserNames.indexOf(e) }`}))
    }
    //console.log( currentSpeakers)

    // const deleteSpeaker = (e) => {
    //   if(currentUserNames.length === 0 )return
    //   let speakers = []
    //   currentSpeakers.filter( res => 
    //     {if(res.name !== e){
    //       speakers.push(res)
    //     }})
    //   setCurrentSpeakers(speakers)  
    // }



   // console.log(currentSpeakers)
  return (
     eventRun.eventSlot > 0 && eventRun.eventSlot < eventData.eventList.length - 1 && 
      <div className='center'>
        {/* <p style={{margin: "0"}}>Speakers:</p>  */}
        
            {
              eventData.eventList[eventRun.eventSlot].type === "Presentation" ?
                <PresentationSpeaker currentSpeakers={currentSpeakers} />
              : eventData.eventList[eventRun.eventSlot].type !== "Presentation" ?
                <div className='center'> 
                  <div className='editUsers' style={{gridTemplateColumns:videoRow === 1 ? `100%` : `repeat(${videoRow}, minmax(100px, 1fr))`}}>
                      {   
                        currentSpeakers?.map( (res) => 
                          <div style={{position:"relative"}} key={res._id}>
                            <div className='slideTitle' 
                              key={res.name.replace(' ', '-')} 
                              onClick={()=> changeSpeaker(res.name)}
                              style={{padding: "10px", position:"relative"}}
                            >
                              <Speaker user={res} name={false}/>
                              
                            </div>  
                            <div  className="userDelete" onClick={()=> setSelectOne(res.name)}>< BiX /></div>
                          </div>
                        )  
                      }
                      
                  </div>
                  {
                    currentSpeakers.length < videotypes[eventData.eventList[eventRun.eventSlot ].type] &&
                    <AddUser /> 
                  }
                </div>
              : null
            }
          
      </div>
  )

      }
export default EditSpeakers