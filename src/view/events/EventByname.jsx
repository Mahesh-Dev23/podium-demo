import React,{ useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { oneEvent } from '../../features/event/eventSlice'
import { setColors, setDesign, setMode, setEventRun, setEvent, setSocketData } from '../../features/ui/uiSlice'
import changeColors from '../../controllers/changeColors'
import socketAddSpeakers from '../../controllers/socketspeakers'
import { useNavigate } from 'react-router-dom'
import Button from '../inside/buttons/Button'
import { FaUnlockAlt } from "react-icons/fa"
import { BiLockOpen, BiUserPlus } from "react-icons/bi"
import setBackgroundColor from '../../controllers/setBackgroundColor'

// import AgoraRTC from 'agora-rtc-sdk-ng'


const EventByname = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    

    const { user } = useSelector( state => state.auth )
    const { eventData, socketSpeakers } = useSelector(state => state.ui)
    const { eventToRun } = useSelector( state => state.events)
    
    const [ room, setRoom ] = useState('Event name')
    const [ socketUser, setSocketUsers ] = useState([])
    
    const config = { mode: "rtc", codec: "vp8" }
    const liveConfig = { mode: "live", codec: "vp8" }

    // const client = AgoraRTC.createClient(config);
    // const client2 = AgoraRTC.createClient(config)
    // const liveClient = AgoraRTC.createClient(liveConfig)

    let localAudioTrack 
    let localVideoTrack 
  
    const tracks = [ localAudioTrack, localVideoTrack ]  
  

    const navigation = () => {
      if(eventToRun === undefined) return 
      // console.log(eventToRun)
      navigate('/events')
    }
    
    useEffect(()=>{
      if(user.isAdmin){ 
        setRoom(eventData.name) 
        // socketAddSpeakers( user.name, socketUser ).then( res => dispatch( setSocketData(res) ))
      }
      setBackgroundColor("eventByName", false)
    },[])

    useEffect(()=>{
      if(room !== 'Event name') return setBackgroundColor("eventByName", true)
    },[room])

    const eventCatch = () => {
      if (!eventToRun) return
      // console.log("3 eventCatch")
      if (Object.keys(eventToRun).includes("data")) {
        dispatch(setDesign(eventToRun.selectedDesign))
        dispatch(setMode(eventToRun.mode))
        dispatch(setEventRun(eventToRun.eventRun))
        dispatch(setEvent(eventToRun.data))
        dispatch(setColors({
          'name': eventToRun.colors.name,
          'brandingDark': eventToRun.colors.brandingDark,
          'branding1': eventToRun.colors.branding1,
          'branding2': eventToRun.colors.branding2,
          'branding3': eventToRun.colors.branding3,
          'brandingLight': eventToRun.colors.brandingLight
        }))
        changeColors(eventToRun?.colors)
        
      }
    }
  
    
  
    useEffect(() => {
      if(eventToRun === undefined) return 
      if (Object.keys(eventToRun).includes("data")) {
        // console.log("2 eventToRun 84")
        eventCatch()
      }
      
    },[eventToRun])

    useEffect(()=>{
      if(eventData === undefined || room === 'Event name') return
      if(eventData.name === room) { 
        // console.log("4 To navigation")
        navigation()
      }else{
        // console.log("4 Room name is wrong!", room)
        // console.log(eventData)
      }

    },[eventData])

    // function to initialise the SDK for video camera ---------------------

    // let joinAndDisplayLocalStream = async () => {
         
    //   if( user.name === "presentation") return 
    //   // client.on('user-published', handleRemoteUser)
      
    //   // client.on('user-unpublished', handleUserUnpublish)
    //   // client.on('user-left', handleUserLeft)

    //   await client.join( process.env.APP_ID, room, process.env.token, user.name.replace(' ', '-') );
      
    //   localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack()
    //   localVideoTrack = await AgoraRTC.createCameraVideoTrack()
      
    //   localVideoTrack.play(user.name.replace(' ', '-'))
    //   //localAudioTrack.play()

    //   await client.publish([localAudioTrack, localVideoTrack]);
      
    //   //alert("published")
    
    // } 

    // join for presentation mode ------------------------------------------------------

    // const presentationMode = async () => {
    
    //   if( user.name !== "presentation") return 
      
    //   // client2.on('user-published', handleRemoteUser)
     
    //   await client2.join( process.env.APP_ID, room, process.env.token, 'presentor' );
      
    //   let presentation = await AgoraRTC.createScreenVideoTrack( )
    //   //alert("154 pre")
    //   presentation.play('presentor')
        
    //   await client2.publish([presentation]);
    //   // alert("159 pre")
      
    // }
    
    const joinCall = () => {
      // console.log("1 Join Call")
      if(room !== 'Event name') {
        dispatch( oneEvent( room ) )
      } 
      
    }

  //  console.log("EventByName")
    
    
  return (
    <div className='podium' id="eventByName">
      <p>Hdf bank Annual General Meeting</p>
        <div className='joinCall'>
            <input   
                type="text"
                placeholder={room}
                value= {room}
                onChange={(e)=> setRoom(e.target.value)}
            />
            <div onClick={()=> joinCall()} style={{justifySelf:"center"}}>
              
                  <Button icon={<BiLockOpen />} text="Join" direction="right"/>
              
            </div>
        </div>
    </div>
  )
}

export default EventByname