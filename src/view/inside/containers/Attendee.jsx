import React,{ useEffect, useState} from 'react'
import SpeakerToggle from './SpeakerToggle'

import { useSelector } from 'react-redux'
import Icon from './Icon'
import { setNewUser } from '../../../features/auth/authSlice'



const Attendee = ({res, oneParticipant}) => {
    // console.log("Attendee ", vidId.name)
    const { socketSpeakers, toName } = useSelector( state => state.ui )
    const [senderName, setSenderName ] = useState('')
    // const { user } = useSelector( state => state.auth )
    // const [ isConnected, setIsConnected ] = useState();

    // const [ socketName, setSocketName ] = useState(null)
    // const { name, jobTitle } = vidId
    // const initial = name.split(" ")
    
    // console.log(eventData)
    
    console.log(senderName)

    const oneName = (name) => oneParticipant(name)
    useEffect(()=>{
        oneName(senderName)
        console.log(senderName)
      },[senderName])
    
    return (
    

    <div   onClick={()=> oneParticipant(res)}>
            <Icon type="name" name={res} 
                  color={ socketSpeakers && socketSpeakers.includes(res) && toName !== res ? "rgba(var(--podium1), .5)" : 
                  socketSpeakers && socketSpeakers.includes(res) && toName === res ? "rgba(var(--podium1), 1)" : "rgba(var(--podium3), .1)"}
            />
    </div>
    )
}

export default React.memo(Attendee) 