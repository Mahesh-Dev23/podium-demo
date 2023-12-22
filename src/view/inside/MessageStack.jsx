import React, { useState, useEffect, memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MessageReceived from './containers/MessageReceived'
import MessageSend from './containers/MessageSend'
import AllAttendants from './AllAttendants'
import ScrollToBottom from 'react-scroll-to-bottom'
import { setMessageStack, setSocketData, setEventRun } from '../../features/ui/uiSlice'
import { useSocket } from '../../hooks/useSocket'
import { v4 as uuidv4 } from 'uuid'


const MessageStack = () => {
    //  console.log("message stack")
    const { messageStack, eventRun } = useSelector(state => state.ui)   

    const { msgStack, joinedUsers, goTo } = useSocket( )

    const dispatch = useDispatch()

    useEffect(()=>{
      //  console.log(msgStack)
      // if(!msgStack) return
       dispatch(setMessageStack(msgStack))
      // setNewMessage({})
     },[msgStack])

     useEffect(()=>{
      // if(!joinedUsers) return
      dispatch(setSocketData(joinedUsers))
     },[joinedUsers])

     useEffect(()=>{
      if(eventRun && eventRun.eventSlot > 0 && eventRun.eventSlot === goTo.eventSlot) return
      dispatch(setEventRun(goTo))
     },[goTo])

  return (
    <div className="messagebox">
      <AllAttendants />
      <div className="messagePanel" style={{paddingBottom: "10px"}}>
        
          <MessageSend />
          
          <ScrollToBottom className="messageStack">
            {
                messageStack?.map((res) => 
                    <MessageReceived msgElem={res} key={uuidv4()}/>
                    )
            }
          </ScrollToBottom>
        
      </div>
      
        
    </div>
  )
}

export default memo(MessageStack)