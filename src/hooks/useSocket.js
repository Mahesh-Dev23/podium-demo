import { useState, useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'
import updateArray from '../controllers/updateArray'

import { io } from "socket.io-client"
// const socket = io(process.env.backEnd_Url)
const socket = io('https://podium-backend.vercel.app')

export const useSocket = () => {
    // console.log("useSocket")
    const { eventData, messageStack, eventRun, logout, newMessageToName, toName } = useSelector(state => state.ui)
    const { user } = useSelector( state => state.auth )

    const [ msgStack, setMsgStack ] = useState([])
    const [ joinedUsers, setJoinedusers ] = useState([])
    const [ goTo, setGoTo ] = useState({stat: "", eventSlot: 0})

    const [ newMessage, setNewMessage ] = useState({name:``, msg:``})
    const [ loginData, setLoginData ] = useState({})
    // console.log("eventRun ", eventRun)

    

    const loginFunc = () => {
        
        let newRoom = eventData?.name.replace(/ /g, "")

        if( joinedUsers && joinedUsers.includes(user.name)) return

        // setLoginData( { name:user.name, id: socket.id, room: newRoom } ) 
        socket.emit('Logged In', { name:user.name, id: socket.id, room: newRoom })

        if( user.isAdmin === true ) { 
            // console.log(`${user.name} is admin.`)
            socket.emit('Admin', {name:user.name}) 
        }else{
            // console.log(`${user.name} is not admin.`)
        }
        
    }

    //  console.log("1 Earlier messages ", messageStack)

    
    useEffect(()=>{
        loginFunc()
    },[ eventData, user ])

    useEffect(()=>{
        if(Object.keys(loginData).length === 0) return
        socket.emit('Logged In', loginData)
        // setLoginData({})
        return() =>{
            socket.off('Logged In')
        }
    },[loginData])

    useEffect(()=>{
        if(newMessage.name === '' && newMessage.msg === '') return
        if(messageStack && messageStack.name === newMessage.name && messageStack.msg === newMessage.msg) return
        updateArray(newMessage.name, newMessage.msg , messageStack).then(res => setMsgStack(res))
    },[newMessage])

    useEffect(()=>{
        // console.log("socket 50")
        if( user === null || eventData?.name === '' ) return
         
        socket.on('Welcome', data => setNewMessage({name:`podium`, msg:`Welcome ${data.name}`}))
        socket.on('loggedUsers', data => setJoinedusers(data))

        // sending message to all as data name ===''
        socket.on('paticipant reply', data => {
            //  console.log("paticipant reply ", data)
            setNewMessage(data)
        })

        // sending message to one person
        socket.on('one person', data => { 
            //  console.log(data)
            setNewMessage(data) })

        // event run 
        socket.on('go to', data => {
             console.log(data)
            setGoTo({ stat: "", eventSlot: data })
        })

        socket.on('loggedOutUsers', data => {
                    console.log('loggedOutUsers 83', data)
                        setNewMessage({name:"podium", msg:`${data.name} is ${data.msg}`})
                        setLoginData({})
                })

        return() =>{
                    // socket.off('Welcome')
                }
    },[socket])

    // console.log("messageStack ", messageStack)
    // console.log(msgStack)
    
    
    
    useEffect(()=> {
        // if( Object.keys(newMessageToName).length === 0 ) return
        //  console.log('newMessageToName ', newMessageToName)
        socket.emit('paticipant',  newMessageToName )
        return() =>{
            socket.off('paticipant')
        }
    },[newMessageToName])

    useEffect(()=> {
        if(toName === '') return
        // console.log('toName ', toName)
            socket.emit('one paticipant', { name:toName })
        return() =>{
            socket.off('one paticipant')
        }
    },[toName])



    // useEffect(() => {
    //     socket.on('Welcome', data => {
    //         // console.log('Welcome ', data)
    //         // if(Object.keys(messageStack).length !== 0 ) return console.log("messageStack 47 ", messageStack)

    //         // if(joinedUsers.includes(data.name)) return
    //         setNewMessage({name:"podium", msg:`Welcome ${data.name}`})
    //            })
    //     // checking to logged status of users       
    //     socket.on('loggedUsers', data => setJoinedusers(data))

    //     // sending message to all as data name ===''
    //     socket.on('paticipant reply', data => {
    //         //  console.log("paticipant reply ", data)
    //         setNewMessage(data)
    //     })

    //     // sending message to one person
    //     socket.on('one person', data => { 
    //         //  console.log(data)
    //         setNewMessage(data) })

    //     // event run 
    //     socket.on('go to', data => {
    //         //  console.log(data)
    //         setGoTo({ stat: "", eventSlot: data })
    //     })

    
  
    

    //     return() =>{
    //         socket.off('Welcome')
    //         socket.off('loggedUsers')
    //         socket.off('paticipant reply')
    //         socket.off('one person')
    //         socket.off('go to')
    //         socket.off('loggedOutUsers')
    //     }

    //  },[socket])

    

    useEffect(()=>{
         if(eventRun.eventSlot === goTo.eventSlot ) return
        socket.emit("Slide to", eventRun.eventSlot  )
        console.log("goto ", eventRun.eventSlot)
        return() =>{
            socket.off('Slide to')
        }
    },[eventRun])

   return { msgStack, joinedUsers, goTo }

}