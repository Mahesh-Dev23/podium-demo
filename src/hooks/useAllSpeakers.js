import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

export const useAllSpeakers = () => {

    const { eventData } = useSelector( state => state.ui ) 

    
    let allSpeakers = []
    let newSpeaker = []

    if( eventData !== undefined && Object.keys(eventData).length !== 0) {
        
        for(let i = 1; i < eventData.eventList.length - 1; i++){
                
            if(eventData.eventList[i].speakers === "undefined") return
    
                eventData.eventList[i].speakers.filter( res => {
                                  
                    if( newSpeaker.length > 0 && newSpeaker.includes(res.name) ) return
                        newSpeaker.push(res.name)
                        allSpeakers.push(res)
                    
                })
    
        }
    }


    //allSpeakers.push("eventData")
    
  return allSpeakers
}

