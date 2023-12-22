
import React, { useState, useEffect } from 'react'
import Step from '../Steps/Step'
import { FaPen, FaTrash, FaExchangeAlt, FaPlus,  FaCalendarCheck, FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'
import { BiPencil, BiRightArrowAlt, BiLeftArrowAlt, BiTrash, BiAddToQueue, BiTransfer } from "react-icons/bi"
import { useSelector, useDispatch } from 'react-redux'
import { eventForRun, editEvent, oneEvent } from '../../features/event/eventSlice'
import { setEventRun, setModal, setEvent, setAllUser } from '../../features/ui/uiSlice'
import { useNavigate } from 'react-router-dom'
import updateEvent from '../../controllers/updateEvent'
import allSpeakers from '../../controllers/allSpeakers'
import useAllSpeakers from '../../hooks/useAllSpeakers'
import Button from '../inside/buttons/Button'



const Slider = () => {
    const {eventData,  eventRun } = useSelector( state => state.ui )
    const { eventToRun } = useSelector( state => state.events)
    //console.log(eventData)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    
    const [ count, setCount ] = useState( eventRun.eventSlot )
    const [ checkComplete, setCheckComplete ] = useState(false)

    
    

    // const checkSpeakers = () => {
        
    //     let check = false
    //     let i
    //     if(eventData.eventList){
    //         //console.log("checkSpeakers", eventData.eventList.length )
    //         for(i = 1; i < eventData.eventList.length - 1; i++){
                
    //             //if(eventData.eventList && eventData.eventList[i].speakers !== "undefined") return
    
    //             if(eventData.eventList && eventData.eventList[i].speakers.length === 0) {
    
    //                 check = false  
    //                 //setCount(i)
    //                 i = eventData.eventList.length - 1
    //                 //console.log(check)
    //             } else{
    //                 check = true
    //                 //console.log(check)
    //             }
                
    //         }
    //     }
    //     setCheckComplete(check)
    // }

    const slideTo = (index) => {
        setCount( index )
        
        
    }

    const goTOEvent = ()=> navigate('/design')

    const addNewEvent = (e)=> {
        dispatch(setModal({stat: true, content: `event slot ${e}`}))
    }

    const deleteEvent = ()=> {
        let eventList = []
        eventData.eventList.filter( (res, index) => {
            if(index !== eventRun.eventSlot){
                eventList.push(res)
            }
        })

        const updatedEvent = updateEvent(eventData, "eventList", eventList)
        dispatch(setEvent(updatedEvent))
    }

    const navigation = () => {
        //dispatch( oneEvent( eventData.name ) )
        navigate('/event')
      }

    const launchEvent = ()=> {
        
        dispatch(setEvent({...eventData, status:"run"}))
        dispatch(setEventRun({stat: "", eventSlot: 0}))
        navigation()
        
    }

    //useEffect(()=> {  checkSpeakers() }, [])

    useEffect(()=> {
        dispatch(setEventRun({stat: "", eventSlot: count}))
        //checkSpeakers()
        if (eventData === undefined || Object.keys(eventData).length === 0) return
        
    },[count, eventData])

    const editEventTitle = () => {
        dispatch(setModal({stat: true, content: "edit event"}))
    }

    const changeDesign = () => navigate('/event')
    
    const changeTheme = () => navigate('/event')
    // console.log(count)

  return (
    
    
        <div className='sliderMain' >
            {
                Object.keys(eventData).length !== 0 &&   
                <div className='title' onClick={() => editEventTitle(eventData._id)} > 
            
                    <h3 className='podiumTitles' >{eventData.name } </h3>
                            
                    <Button icon={<BiPencil />} text="Edit" direction="right" />
                </div>
                
            }
            {
                Object.keys(eventData).length !== 0 && eventData.eventList.length > 0 &&
                <div className='slideControl' >
                    <div className='silderContainer' >
                        <Step count = {count} />
                    </div>
                    <div className='sliderBar' style={{width: `calc(${ eventData.eventList.length}* 20px)`, gridTemplateColumns: `repeat(${eventData.eventList.length}, 1fr)`}}>
                    {
                        eventData.eventList.map((value, index)=> 
                                    
                            <div className='sliderdots' 
                                onClick={() => slideTo( index )}
                                style={{background: index === count ?`rgba(var(--podium1), 1)` : `rgba(var(--podium4), 1)`}}
                                key={`count ${index}`}>
                                <p>{  index + 1 }</p>
                            </div>               
                        ) 
                    }
                    </div>
                </div>    
                   
            }
        
                <div className="sliderBar" style={{display:"grid", gridTemplateColumns: count === 0 ? 'auto auto ': 'auto auto auto auto auto auto ', gap:"5px", justifyContent: "center", justifySelf:"center"}}>
                    <div onClick={() => goTOEvent()} > 
                        <Button icon={<BiLeftArrowAlt />} text="Design" direction="left"  />
                    </div>
                    
                    {
                        count > 0 && count < eventData.eventList.length - 1 ?
                        <>
                            <div onClick={() => addNewEvent("prev")}  >   
                                <Button icon={<BiAddToQueue />} text="Add" direction="left"  />
                            </div>   
                            <div onClick={() => deleteEvent()}  > 
                                <Button icon={<BiTrash />} text="Delete" direction="left"  />
                            </div>
                            <div onClick={() => addNewEvent()}  >  
                                <Button icon={<BiTransfer />} text="Shuffle" direction="right"  />
                            </div>
                            <div onClick={() => addNewEvent("next")}  >  
                                <Button icon={<BiAddToQueue />} text="Add" direction="right"  />
                            </div>
                        </>
                        : null
                    }
                    <div onClick={() => launchEvent()} 
                        // className={ checkComplete ? `btn btn-round btn-dark` : `btn btn-round` } 
                    > 
                        <Button icon={<BiRightArrowAlt />} text="Start" direction="right"  />
                    </div>    
                </div>    

        </div>
    
  )
}

export default Slider