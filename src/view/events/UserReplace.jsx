import React, { useEffect, useState, useCallback}  from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import updateEvent from '../../controllers/updateEvent'
import { editEvent } from '../../features/event/eventSlice'
import { setModal } from '../../features/ui/uiSlice'
import Speaker from './Speaker'

const UserReplace = ({userArr}) => {

    const {eventData, eventRun, modal} = useSelector(state => state.ui)
    const {event} = useSelector(state => state.events)
    const [ speakers, setSpeakers ] = useState([])
    const [ videoRow, setVideoRow ] = useState(1)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    
    const [ newEventList, setNewEventList ] = useState([])
    const [ currentIndex, setCurrentIndex ] = useState(modal.content.replace('speakers ', '') )
    
    const [ currentSpeaker, setCurrentSpeaker ]  = useState({})
    
    const [ names, setNames ] = useState([])
    
    const replacable = () => {
      console.log("replace")
      setCurrentSpeaker( speakers[currentIndex] )
      
      let names = []
      speakers.map( res => 
        //{if(speakers[currentIndex].name !== res.name){
          names.push(res.name)
        //}}
        )
      
      setNames(names )

    }

    useEffect(()=>{
        if( speakers && speakers.length === 0 ){ setSpeakers(eventData.eventList[eventRun.eventSlot].speakers) }
        setNewEventList(eventData.eventList)
    },[])

    useEffect(()=> {
        if(!userArr) return
          setVideoRow(userArr.length)

        if(speakers.length !== 0 && Object.keys(currentSpeaker).length === 0 ){ replacable()}
      },[userArr, speakers])

    
    const changeSpeakers = (e) => {
            
      let newspeakers = []
      console.log(speakers[currentIndex].name)
      console.log(e.name)
            
            speakers.filter( (res, index ) => {
                if(index === Number(currentIndex) ) {
                  newspeakers.push(e)
                } else {
                  newspeakers.push(res)
                }
            })
            
            setSpeakers(newspeakers)

            let changeList = newEventList[eventRun.eventSlot]
            changeList = {...changeList, speakers : newspeakers}
        
            let editedList = []
        
            newEventList.filter( (res, index) => 
                {
                  if(index === eventRun.eventSlot){
                    editedList.push(changeList)
                  }else{
                    editedList.push(res)
                  }
                }
              )
            
            const updatedEvent = updateEvent(eventData, "eventList", editedList)
            dispatch(editEvent(updatedEvent))    
            dispatch(setModal({stat:false, content:""}))      
                
    }
    
    
    
    // const addNewUser = () => {
    //     dispatch(setModal({stat: false, content: ""}))
    //     navigate('/reg')
    //   } 

      // const ConfirmSpeakers = () => {
      //   let changeList = newEventList[eventRun.eventSlot]
      //   changeList = {...changeList, speakers : speakers}
    
      //   let editedList = []
    
      //   newEventList.filter( (res, index) => 
      //       {
      //         if(index === eventRun.eventSlot){
      //           editedList.push(changeList)
      //         }else{
      //           editedList.push(res)
      //         }
      //       }
      //     )
        
      //   const updatedEvent = updateEvent(eventData, "eventList", editedList)
      //   dispatch(editEvent(updatedEvent))    
      //   dispatch(setModal({stat:false, content:""}))
      // }
      
      const replaceMessage = (e ) => {

        let message = ''
        
        if(e.type === "replacable"){
          message = `You have opted to replace ${e.user}.`
        } 
        
        if(e.type === "nonSelected"){
          message = `You have already selected ${e.new} to replace ${e.user}.`
        } 

        if(e.type === "engaged"){
          message =  `${e.user} is already selected.`
        }
        alert(message)
      }

      //console.log(speakers)

  return (
    userArr ? 
    <>
      {currentSpeaker && <div className='stack'>{currentSpeaker.name}</div>}
      <div className="itext">
        Select from non selected list or create new.
      </div>
      <div className='editUsers' style={{gridTemplateColumns:videoRow === 1 ? `100%` : `50% 50%`}}>
        {
          userArr.map( user => 
            <>
            {
              currentSpeaker.name === user.name && eventData.eventList[eventRun.eventSlot].speakers[currentIndex].name === user.name ? 
              <div className='slideTitle userTitleSelected' key={user.email} 
                  onClick={()=> replaceMessage({type: "replacable", user: user.name, new: ''})}
              >
                  <Speaker  user={user} />
              </div>
              :
              speakers[currentIndex].name === user.name && eventData.eventList[eventRun.eventSlot].speakers[currentIndex].name !== user.name ? 
              <div className='slideTitle userTitle' key={user.email} 
                  onClick={()=> replaceMessage({type: "engaged", user: user.name, new: currentSpeaker.name})}
              >
                  <Speaker user={user} name={true} />
              </div>
              :
              names && names.includes(user.name) ? 
              <div className='slideTitle userTitleSelected' 
                  key={user.email} 
                  onClick={()=> replaceMessage({type: "engaged", user: user.name, new: ''})}
              >
                  <Speaker user={user} name={true} />
              </div>
              :
              <div className='slideTitle userTitle' 
                  key={user.email} 
                  onClick={()=> changeSpeakers(user)}
              >
                  <Speaker user={user} name={false} />
              </div>
            }
            </>
          )
            
            
        }
        
      </div>
      {/* <div className='inputTimeSlot'>
        
        <div className="btn btn-reverse" 
            onClick={()=> addNewUser()} 
        >
            Create New 
        </div>
        <div className="btn" 
            onClick={()=> ConfirmSpeakers()} 
        >
            Save 
        </div>
      </div> */}
        
    </>
    : null
  )
}

export default UserReplace