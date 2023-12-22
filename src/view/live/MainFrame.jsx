import React, { useState, useEffect, memo, useCallback, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import HostView from './HostView'
import { setAllUser } from '../../features/ui/uiSlice'

const MainFrame = () => {
  // console.log("mainFrame")
   const { eventData } = useSelector(state => state.ui)
  const dispatch = useDispatch()

  // const [ newSocketSpeaker, setNewSocketSpeaker ] = useState('')
  
  const allSpeakers = useMemo( () => {

    if(eventData.eventList === undefined ) return
    
    let allSpeakers = []
    let newSpeaker = []
        
        for(let i = 1; i < eventData.eventList.length - 1; i++){
                
            if(eventData.eventList[i].speakers === "undefined") return
    
                eventData.eventList[i].speakers.filter( res => {
                                  
                    if( newSpeaker.length > 0 && newSpeaker.includes(res.name) ) return
                        newSpeaker.push(res.name)
                        allSpeakers.push(res)
                    
                })
        }
        //console.log(allSpeakers)
        return allSpeakers
  })

  useEffect(()=>{ dispatch(setAllUser(allSpeakers)) },[  ]) 

  
  
  return (
    <div className='mainFrame' >
     
      <HostView  />
      
    </div>
  )
}

export default memo(MainFrame)