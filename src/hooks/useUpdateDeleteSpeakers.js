import { useState, useEffect } from "react";


export const useUpdateDeleteSpeakers = (speakers, selectOne, eventData, eventRun) => {

    // console.log(speakers)
    // console.log(selectOne)
    if( selectOne === '' || speakers === undefined || speakers.length === 0) return

      let eventList = eventData.eventList
      let newEventList = []
  
      let newSpeakers = []
          
      speakers?.filter( res => 
              {if(res.name !== selectOne){
                  newSpeakers.push(res)
              }})
  
      eventList.filter( ( res, index ) => {
          if( index === eventRun.eventSlot ){
            newEventList.push({...res, speakers: newSpeakers}) 
          }else{
            newEventList.push(res)
          }
      })
  
      // if( newEventList === undefined || newEventList.length === 0 )return
      //   const updateThisEvent = updateEvent(eventData, "eventList", newEventList)
            //console.log(updateThisEvent)
        //dispatch(setEvent(updateThisEvent))
            
      
      
      return newEventList
    
   
}

 //export const {deleteSpeaker} = useUpdateDeleteSpeakers.deleteSpeaker
