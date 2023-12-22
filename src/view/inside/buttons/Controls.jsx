import React, { useState, useEffect } from 'react'
import timerun from '../../../controllers/timerun'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setEventRun, setAdnimUI } from '../../../features/ui/uiSlice'
import { oneEvent } from '../../../features/event/eventSlice'
import ProgressStat from '../containers/ProgressStat'
import { FaLongArrowAltLeft } from "react-icons/fa";

import Button from './Button'

const Controls = () => {
    const dispatch = useDispatch()
    const { eventData, eventRun, modal } = useSelector(state => state.ui)
    const adminView = useSelector(state => state.ui.AdminUI)
    const { eventToRun } = useSelector(state => state.events)
    const navigate = useNavigate()
    
    //console.log(eventRun)
    //console.log(eventData.eventList)
    
    useEffect(()=>{
        dispatch( oneEvent( eventData.name ) )
    },[eventRun])

    const launchEvent = async () => {
        console.log("event launched")
        dispatch(setEventRun({ stat: eventToRun.data.eventList[0].title, eventSlot: 0 }))

        // run event sections
        await timerun(eventToRun.data.eventList[0].time * 100)
            .then(() => dispatch(setEventRun({  stat: eventToRun.data.eventList[1].title, eventSlot: 1 })))

    }

 
    useEffect(() => {

        if (eventToRun.data?.eventList && eventToRun.data?.eventRun.eventSlot > 0 && eventToRun.data?.eventRun.eventSlot === eventToRun.data?.eventList.length - 1 ) {
            timerun(eventToRun.data?.eventList[eventToRun.data?.eventRun.eventSlot].time * 100)
                .then(() =>{ 
                    dispatch(setEventRun({ ...eventToRun.data?.eventRun, stat: "Event Over", eventSlot: 0 }))
                    //console.log(eventRun.stat + " over")
            })
        } 
        
        if (eventToRun.data?.eventList  && eventToRun.data?.eventRun.eventSlot > 0 && eventToRun.data?.eventRun.eventSlot < eventToRun.data?.eventList.length - 1) {
            timerun(eventToRun.data?.eventList[eventToRun.data?.eventRun.eventSlot].time * 100)
                .then(() =>{ 
                    dispatch(setEventRun({ ...eventToRun.data?.eventRun, stat: eventToRun.data?.eventList[eventToRun.data?.eventRun.eventSlot +1 ].title, eventSlot: eventToRun.data?.eventRun.eventSlot +1 }))
                    //console.log(eventRun.stat + " over")
            })
        }
        
    }, [eventToRun.data])

    //console.log(modal)

    return (
        <div className="launch" style={{display:"grid", gridTemplateColumns: 'auto auto', gap:"5px", alignItems: "center"}}>
            <div onClick={() => navigate("/edit-event")} > 
                <Button icon={<FaLongArrowAltLeft />} text="Back" direction="right"  />
            </div>
            
                {
                    eventToRun.data && eventToRun.data?.eventRun.stat === "" ?
                            <button
                                onClick={() => launchEvent()}
                                className="btn  btn-dark"
                            >
                                Launch Event
                            </button>
                        : 
                        eventToRun.data && eventToRun.data?.eventRun.stat === "Event Over" ?
                            <button
                                onClick={() => launchEvent()}
                                className="btn  btn-dark"
                            >
                                Rerun Event
                            </button>
                        :
                        
                        <ProgressStat eventData={ eventToRun.data?.eventList[ eventToRun.data?.eventRun.eventSlot ] } eventSlot={ eventToRun.data?.eventRun.eventSlot }/>
                }
            

        </div>
    )
}

export default Controls