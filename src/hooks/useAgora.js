import React, {useState, useEffect} from 'react'
import AgoraRTC from 'agora-rtc-sdk-ng'
import { useSelector } from 'react-redux'

export const useAgora = () => {
    let loggedUser

    const { eventData } = useSelector( state => state.ui )
    const { user } = useSelector( state => state.auth )

    const [ roomId, setRoomId ] = useState()

    const APP_ID = "2c30779ed004444299f517e3aa3ae1cf"
    let token = "0062c30779ed004444299f517e3aa3ae1cfIADQ2SmzbmoCd2Q517Q3J4l5dYQrAJUwP2VD8sQ3cdy+cglrYw0AAAAAEABu1Ka51mXJYgEAAQDXZcli"

    useEffect(()=> {
        if( eventData && eventData.name !== '' ){
            setRoomId( eventData.name )
        }
    },[eventData])

    const config = { mode: "rtc", codec: "vp8" }
    const liveConfig = { mode: "live", codec: "vp8" }

    const client = AgoraRTC.createClient(config);
    const client2 = AgoraRTC.createClient(config)
    const liveClient = AgoraRTC.createClient(liveConfig)

    let localAudioTrack 
    let localVideoTrack 
  
    const tracks = [ localAudioTrack, localVideoTrack ]  
  
    let videoRow

    // check user ----------------------------------------------------------

    useEffect(()=>{
    
        // creating agora client for screen presentation
        if( user.name === "presentation") { presentationMode() }
          
        // creating agora clinet for camera device
        if( user.name !== "presentation") { joinAndDisplayLocalStream() }
    
        // for live stream
        //if(userNames && localUser.name === userNames[0]) { goLive()}
          
    },[localUser.name])


    // function to initialise the SDK for video camera ---------------------

    let joinAndDisplayLocalStream = async () => {
        console.log(localUser.name)
     
        if( localUser.name === "presentation") return 
        client.on('user-published', handleRemoteUser)
        
        client.on('user-unpublished', handleUserUnpublish)
        client.on('user-left', handleUserLeft)

        await client.join(APP_ID, roomId, token, localUser.name.replace(' ', '-') );
        
        localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack()
        localVideoTrack = await AgoraRTC.createCameraVideoTrack()
        
        localVideoTrack.play(localUser.name.replace(' ', '-'))
        //localAudioTrack.play()

        await client.publish([localAudioTrack, localVideoTrack]);
        
        //alert("published")
      
    }



    return loggedUser
}