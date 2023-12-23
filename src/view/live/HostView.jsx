import React, { useState, useEffect, memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import SingleVideo from '../inside/containers/SingleVideo'
import EventSetUp from './EventSetUp'
import AllAttendants from '../inside/AllAttendants'
import EventFlow from './EventFlow'
import Controls from '../inside/buttons/Controls'
import Attendee from '../inside/containers/Attendee'
import SideBar from '../inside/containers/SlideBar'
import socketAddSpeakers from '../../controllers/socketspeakers'
import SpeakerToggle from '../inside/containers/SpeakerToggle'
import { setEventRun, setSocketData } from '../../features/ui/uiSlice'
import { oneEvent } from '../../features/event/eventSlice'
import MessageStack from '../inside/MessageStack'
import MessageSend from '../inside/containers/MessageSend'
import TitleTop from '../inside/containers/TitleTop'


const HostView = () => {
  // console.log("hostView ")
  
  const { user } = useSelector( state => state.auth)
  const { adminUI, eventData, eventRun, socketSpeakers } = useSelector(state => state.ui)
  const { eventToRun } = useSelector(state => state.events)

  const dispatch = useDispatch()
  const [ userSwitch, setUserSwitch ] = useState(false)
  // const [ socketUser, setSocketUsers ] = useState([])
  const [initial, setInitial ] = useState()
  
  useEffect(()=>{
    dispatch(oneEvent( eventData.name ))
    setInitial( user.name.split(" "))
  },[ ])

  useEffect(()=>{
    // console.log( eventToRun?.speakers) // worked
    if(eventToRun?.speakers?.length > 0) {
      // setSocketUsers(eventToRun?.speakers)
      dispatch( setSocketData( eventToRun?.speakers )) // getting already logged in speakers
    }
  },[ eventToRun ])
  // console.log(socketSpeakers)

  useEffect(()=>{
    
    let users = []
    if( eventData &&  eventRun && eventRun.eventSlot !== undefined && eventData.eventList[eventRun.eventSlot] !== undefined ) {

      eventData.eventList[eventRun.eventSlot].speakers.map( res => users.push(res.name) )
    }
    
    if(users.includes(user.name)) {
      setUserSwitch(true)
    }else{
      setUserSwitch(false)
    }   
      
  },[ eventData, eventRun ])
  
  // useEffect(()=>{
  //   socketAddSpeakers( newSocketSpeaker, socketUser ).then( res => setSocketUsers( res ))
  // },[ newSocketSpeaker ])
  
  // useEffect(()=> { dispatch( setSocketData(socketUser) ) },[ socketUser ])

  // if(socketSpeakers.length > 0) {
  //   console.log(socketSpeakers)
  // }
  
  // console.log("eventToRun ", eventToRun)

  // console.log("socketSpeakers ", socketSpeakers) // worked
  // console.log("socketUser ", socketUser) // worked

  return (
    adminUI?.viewMode !== "View attendance"  ?
        <EventFlow /> 
        :
        <div className='hostView'>
            
            <div className='videoLeft'>
              <TitleTop />
              <EventSetUp />
              {/* { user.isAdmin && <Controls /> } */}
              { user.isAdmin ? < SideBar arr={ eventData?.eventList } count={ eventRun?.eventSlot } /> : null }
            </div>

            <div className="hostpanel"> 
                <div className='self'>
                  {   eventRun?.eventSlot > 0 && eventRun.eventSlot < eventData.eventList.length && userSwitch ?
                      // <Attendee res={user.name } />   
                      <div className='selfIcon' >
                              <h3> {initial[0][0] + initial[1][0]}  </h3>                          
                      </div>
                    :  eventRun?.eventSlot > 0 && eventRun.eventSlot < eventData.eventList.length && userSwitch === false ?
                      <div className='selfVideo' ><SingleVideo vidId={user } /><SpeakerToggle /></div>
                    : <div className='selfVideo' ><SingleVideo vidId={user } /><SpeakerToggle /></div>  
                  }
                  {/* <SpeakerToggle /> */}
                </div>
                
                
                {/* <MessageStack eventData={eventData} user={user} /> */}
                
            </div>
            
        </div>
  )
}

export default memo(HostView)