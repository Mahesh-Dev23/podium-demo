import React, { useEffect, useState, memo} from 'react'

import MainFrame from './MainFrame'

import { useSelector, useDispatch } from 'react-redux'
// import { setColors, setDesign, setMode, setEventRun, setEvent, setSocketData } from '../../features/ui/uiSlice'
// import { oneEvent, eventForRun } from '../../features/event/eventSlice'
// import changeColors from '../../controllers/changeColors'
// import { useSetEvent } from '../../hooks/useSetEvent'




const MediaCast = () => {
  // console.log("mediaCast")
  // const dispatch = useDispatch()
  // const { eventToUpdate } = useSetEvent()
 
  // const { eventData, eventRun } = useSelector(state => state.ui)
  // const { eventToRun } = useSelector(state => state.events)
  // const { user } = useSelector( state => state.auth )

  // console.log("event data ", eventData)

  // const eventCatch = () => {
  //   if (!eventToRun) return
  //   if (Object.keys(eventToRun).includes("data")) {
  //     dispatch(setDesign(eventToRun.selectedDesign))
  //     dispatch(setMode(eventToRun.mode))
  //     dispatch(setEventRun(eventToRun.eventRun))
  //     dispatch(setEvent(eventToRun.data))
  //     dispatch(setColors({
  //       'name': eventToRun.colors.name,
  //       'brandingDark': eventToRun.colors.brandingDark,
  //       'branding1': eventToRun.colors.branding1,
  //       'branding2': eventToRun.colors.branding2,
  //       'branding3': eventToRun.colors.branding3,
  //       'brandingLight': eventToRun.colors.brandingLight
  //     }))
      
      
  //   }
  // }

  

  // useEffect(() => {
  //   eventCatch()
  //   changeColors(eventToRun?.colors)
  // },[])

  // useEffect(()=>{

  // },[eventData, eventRun])

  // useEffect(()=>{
  //   if (!eventToRun) return
  //   if (Object.keys(eventToRun).includes("data")){
  //     changeColors(eventToRun?.colors)
  //   }
  //   if(eventToRun.eventRun?.eventslot !== eventRun?.eventSlot ){
  //     eventCatch()
  //   }
  //   // eventCatch()
  // },[eventToRun])
 
  

  // useEffect(() => {
  //   //  console.log(eventToUpdate)
  //   if(user && user.isAdmin){
  //     // console.log("admin")
  //     dispatch( eventForRun( eventToUpdate ))
  //   }
  // },[ eventToUpdate ])

  
   
  
  return (
    <div className="mediaCast background1" id="mediacast">
      
      
          
        <MainFrame 
            // eventData={ eventData } 
            // user={ user } 
        />  
        
    </div>
  )
}

export default memo(MediaCast)