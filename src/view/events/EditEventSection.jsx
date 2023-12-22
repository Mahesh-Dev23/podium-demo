import React, {useState, useEffect} from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { setModal } from '../../features/ui/uiSlice'
import { FaCheck } from "react-icons/fa"

import Input from '../inside/Input'
import Button from '../inside/buttons/Button'
import updateEvent from '../../controllers/updateEvent'


import { editEvent , reset} from '../../features/event/eventSlice'


const EditEventSection = (content, closeModalforRender) => {
    //console.log("onclick",  content.onclick)
    //console.log("content",  content.event)
    const {modal, eventData, eventRun} = useSelector(state => state.ui)
    
    const [newContent, setNewContent] = useState(modal.editedContent)
    const { title, time, type } = eventData ? eventData.eventList[eventRun.eventSlot] : ''
    const eventSectionTypes = ["SingleVideo", "TwoVideos", "Presentation", "Multiscreen" ]
    const [newtitle, setTitle] = useState( title )
    const [newtime, setTime] = useState( time  )
    const [newtype, setType] = useState(type)

    const [ sectionValue, setSectionvalue ] = useState()
    
    const dispatch = useDispatch()

    //console.log(eventRun)

    let eventList = eventData.eventList
    let newEventList = []
    const createEventList = (e) => {
      
       eventList.filter( (res, index) => {
        if(index === eventRun.eventSlot){
          newEventList.push(e) 
        }else{
          newEventList.push(res)
        }
        
        return newEventList
      })
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
        
        dispatch( setModal( { stat: false, content: ""} ) )
        createEventList({ type: newtype, title: newtitle, time: Number( newtime), "speakers": [], "source":""})
        const updateThisEvent = updateEvent(eventData, "eventList", newEventList)
        console.log(updateThisEvent)
        dispatch(editEvent(updateThisEvent))// --------------
        
    }
    
    useEffect(()=> {},[eventData])
  return (
    <div>
        <p>{eventData.name} </p>
        <h3 className='podiumTitles'>Edit This Section</h3>
          
          <form onSubmit={onSubmit} style={{maxWidth: "600px", margin:"0 auto"}}>
            <p>Section Title and time in minutes</p>
            <div className='inputTimeSlot'>
              
                <Input 
                    // label="Section Title "
                    type={"text"} 
                    placeholder={"Provide Section Title"}
                    value= {newtitle}
                    onClick={setTitle}
                />
              
                <Input 
                    // label="Time in minutes "
                    type={"number"} 
                    //placeholder={""}
                    value={newtime}
                    onClick={setTime}
                    size={2}
                    min={1}
                    max={59}
                />
              
            </div>
              <p>Select belowe event section type</p>
              {/* <div className='addPanelistItem '>

                { eventSectionTypes.map( opt => 
                  <div className='radioCube' key={opt}>
                      <div  
                        type="radio"
                        name="type"
                        value={opt}
                      >
                      </div>
                      <p>{opt}</p>
                  </div>
                      )}  
              </div> */}
              <div className='addPanelistItem '>
                { eventSectionTypes.map( opt => 
                  <div className={`radioCube ${opt === newtype ? "radioCubeSelected" : null}`} key={opt} onClick={()=>setType(opt)}>
                    <div  className = {`radioicon ${ newtype === opt && "radioiconSelected"}`}  >
                      <img src={`./${opt}.png`} width="100%"/>
                    </div>
                    <p >{opt}</p>
                  </div>
                      )}
              </div>
            
            <button type='submit' style={{justifySelf:"center"}}>
              <Button icon={<FaCheck />} text="Save" direction="right" />
            </button>
            
          </form>
          
    </div>
  )
}

export default EditEventSection