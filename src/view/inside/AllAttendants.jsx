import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Icon from './containers/Icon'
import { setMessageToName } from '../../features/ui/uiSlice'

import Attendee from './containers/Attendee'
import Alert from './containers/Alert'


// import { io } from "socket.io-client"
// const socket = io()

const AllAttendants = ({event, getSender}) => {
  const users = useSelector( state => state.ui.userNames)
  const { socketSpeakers, toName } = useSelector( state => state.ui)
  const { user } = useSelector( state => state.auth )
  const [ userNames, setUserNames] = useState([])
  const [ videoRow, setVideoRow ] = useState(1)
  const [ alert, setAlert ] = useState(false)
  
  
  const dispatch = useDispatch()
  
  // div elements for videos as per speakers list length ------------------

  const videoRowLength = async () => {
    
    if(userNames.length === 0) return setVideoRow(1) 

    if( userNames.length > 8 ) {
       setVideoRow( Math.round( userNames.length / 2 ))
      // setVideoRow( 2 )
    } else{
      setVideoRow( userNames.length )
    }
  }
  

  // get speaker list sans local user and presentaion screen
  const getOtherUsers = () => {
      let newUsers = []
      users.filter( u => {
          if(!event && u.name === user.name || user.name === "presentation") return 
          newUsers.push(u)
      })
      setUserNames(newUsers)
  }

  useEffect(()=> {  getOtherUsers() },[users] )

  useEffect(()=> {  
    videoRowLength() 
    // console.log(userNames)
  },[userNames])

  const oneParticipant = useCallback((name) =>{
    if(user && user.isAdmin){
        console.log(name)
      if(socketSpeakers && socketSpeakers.includes(name) && name === toName){
        dispatch(setMessageToName(''))
        console.log(`Send message to all.`)
      } 
      else if((socketSpeakers && socketSpeakers.includes(name) && name !== toName)){
        console.log(`Send message to ${name}.`)
        dispatch(setMessageToName(name))
      }else{
        console.log(`${name} is not logged in.`)
      }
      // getSender(name)
    }
  },[])

  useEffect(()=>{
    oneParticipant(toName)
  },[toName])
   console.log(socketSpeakers)
  
return (
  <div className='allattendants' 
    style={{gridTemplateColumns:videoRow === 1 ? `30px` : `repeat(${videoRow}, minmax(30px, auto))`}}
  >
      {
          userNames?.map( res => 
            <Attendee  key={res.name.replace(' ', '-')} oneParticipant={oneParticipant} res={res.name} />
          )
      }
      
  </div>
)
}

export default AllAttendants