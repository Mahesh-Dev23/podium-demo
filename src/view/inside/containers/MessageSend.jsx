import React, { useState, useCallback, memo } from 'react'
import Icon from './Icon'
import {FaCommentDots, FaPaperPlane} from "react-icons/fa"
import { BiPaperPlane } from "react-icons/bi"

import { useSelector, useDispatch } from 'react-redux'
import { setMessageToSend, setMessageToName } from '../../../features/ui/uiSlice'
import { useEffect } from 'react'

const MessageSend = ({getMessageToSend}) => {
    const { user } = useSelector( state => state.auth )
    const { toName } = useSelector(state => state.ui)
    const [ message, setMessage ] = useState('')
    const [ placeHolder, setPlaceholder] = useState('Send message to all')

    const dispatch = useDispatch()

    const sendMessage =  () => { 
            dispatch(setMessageToSend({ name:user.name, msg: message }))
            // getMessageToSend({ name:user.name, msg: message })
            setMessage('')
            setPlaceholder('Send message to all')

            dispatch(setMessageToName(''))
        
    }

    useEffect(()=>{
        if(toName === ''){
            setPlaceholder('Send message to all')
        }else{
            setPlaceholder(`Send message to ${toName}`)
        }
    },[toName])

    
    //   console.log("33 ", message)
  return (
    <div className='sendMessage'>
        {   user && user.isAdmin ? <p className='itext' style={{padding:"5px 10px", margin: 0}}>Click named Icon above to send message to single speakers. By default message goes to all speakers.</p>
            : <p className='itext' style={{padding:"5px 10px", margin: 0}}>You can send message to Admin/ Host only.</p>
        }
        <textarea 
            type="text" 
            placeholder={placeHolder}
            value={message}
            onKeyUp={  e => e.key === 'Enter' ? sendMessage() : null }
            onChange={ e => setMessage(e.target.value)  }
        />
        
        <div 
            className='sendMessageIcon btn btn-round' 
            onClick={ () => sendMessage() }
        >
            <BiPaperPlane />
        </div>
    </div>
  )
}

export default memo(MessageSend)