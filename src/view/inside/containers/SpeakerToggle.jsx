import React,{useState} from 'react'
import Button from '../buttons/Button'
import { FaMicrophone, FaMicrophoneSlash, FaVideo, FaVideoSlash } from "react-icons/fa";
import { BiVideo, BiVideoOff, BiVideoRecording, BiMicrophone,  BiMicrophoneOff } from "react-icons/bi"


const SpeakerToggle = () => {

    const [mute, setMute]= useState(false)
    const [show, setShow]= useState(false)
    const toggleAudio = () => {

    }
  
    const toggleVideo = () => {
      
    }
  return (
    <div className='inputTimeSlot' style={{ position:"absolute", right: "5px", bottom: "5px", gridTemplateColumns: "repeat( 2, 30px )", width: "60px"}}>
        <div  onClick={()=>  toggleAudio()} className=" btn btn-round">
            { mute ? <BiMicrophone  /> : <BiMicrophoneOff /> }
        </div>
        <div onClick={()=> toggleVideo()} className=" btn btn-round">
            { show ? <BiVideoRecording /> : <BiVideoOff /> }
        </div>
    </div>
  )
}

export default SpeakerToggle