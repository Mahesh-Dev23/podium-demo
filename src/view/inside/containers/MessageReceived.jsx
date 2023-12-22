import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import Icon from './Icon'


const MessageReceived = ({msgElem}) => {
    const { name, msg, time } = msgElem
    const { user } = useSelector( state => state.auth )
    const [ initial, setInitial ] = useState([])
    
    useEffect(()=>{
      setInitial(name.split(" "))
    },[])
    
    useEffect(()=>{
      if(name === "") return
      setInitial(name.split(" "))
    },[name])

    
  return (
    
      name === user.name ?
      <div className='messageSlot'>
        <div ></div>
        <div className= 'receivedMessageSelf' >
          <p>{msg}</p>
          <h6>You</h6>
          {/* <h3 className='atnd' style={{ background:"rgba(var(--podium1), .2)", right: 0}} >{ initial.length && initial[0][0] + initial[1][0]}</h3> */}
        </div>
        
      </div>
      :
      name === "podium" ? 
      <div className='messageSlot'>
        <div className= 'receivedMessagePodium' >
          <p>{msg}</p>
          <Icon type="img" name="./podium-admin.png" color="rgba(var(--podium1), .2)"/>
        </div>   
        <div ></div>
      </div>
      :
      <div className='messageSlot'>

        <div className= 'receivedMessage' >
            <h6>{ name }</h6>
            {/* <Icon type="img" name="./podium-admin.png" color="rgba(var(--podium1), .2)"/> */}
            <p>{msg}</p>
        </div>  
        <div ></div>
      </div>
      
  )
}

export default MessageReceived