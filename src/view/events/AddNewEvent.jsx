import React, {useState, useEffect} from 'react'

import Input from '../../view/inside/Input'
import { useSelector, useDispatch } from 'react-redux'
import { setModal, setEvent } from '../../features/ui/uiSlice'
import updateEvent from '../../controllers/updateEvent'

const AddNewEvent = () => {
  const {eventData,  eventRun, modal} = useSelector( state => state.ui )

    const eventSectionTypes = ["SingleVideo", "TwoVideos", "Presentation", "Multiscreen" ]
    const [title, setTitle] = useState("Provide Section Title")
    const [time, setTime] = useState()
    const [type, setType] = useState(eventSectionTypes[0])
    const [eventList, setEventList] = useState({})

    const dispatch = useDispatch()

    const newEventListCreate = ()=> {
      let newEventList = []
      eventData.eventList.filter((res, index)=> {

          if( index < eventRun.eventSlot ){
            newEventList.push(res)
          }
          if( index === eventRun.eventSlot && modal.content === "event slot prev" ){
            newEventList.push(eventList)
            newEventList.push(res)
          }
          if( index === eventRun.eventSlot && modal.content === "event slot next" ){
            newEventList.push(res)
            newEventList.push(eventList)
          }
          if( index > eventRun.eventSlot ){
            newEventList.push(res)
          }
        
      })
      console.log(newEventList)

      const updateThisEvent = updateEvent(eventData, "eventList", newEventList)
      dispatch(setEvent(updateThisEvent))
      
    }

    useEffect(()=>{
      setEventList({ type, title, time })
    },[type, time, title])

    // useEffect(()=>{
    //   if(Object.keys(eventList).length !== 0){
    //     newEventListCreate()
    //   }
    //   console.log(eventList)
    // },[eventList])

    console.log(title)
    const onSubmit = (e) => {
        e.preventDefault()
        setEventList( { "type": type, "title": title, "time": time} )
        dispatch(setModal({stat:false, content:""}))
        
        newEventListCreate()
        
      }

  return (
    <div>
        <h3 className='podiumTitles'>Add item to Event Flow</h3>
        

          

          
          <form onSubmit={onSubmit} style={{maxWidth: "600px", margin:"0 auto"}}>
            <p>Section <span>Title</span> and <span>Time</span> in minutes</p>
            <div className='inputTimeSlot' style={{justifySelf:"stretch", justifyContent: "stretch", gridAutoColumns: "92% 7%"}}>
              <input 
                  //label="Provide Section Title "
                  type={"text"} 
                  placeholder={"Provide Section Title"}
                  value= {title}
                  onChange={(e) => setTitle(e.target.value)}
              />
              <input 
                  //label="Time in minutes "
                  type={"number"} 
                  placeholder={""}
                  value={time}
                  onChange={(e) => setTime( e.target.value)}
                  size={2}
                  min={1}
                  max={59}
              />
            </div>    
            <p>Select belowe event section type</p>
            <div className='addPanelistItem '>
              { eventSectionTypes.map( opt => 
                  <div className={`radioCube ${opt === type ? "radioCubeSelected" : null}`} key={opt} onClick={()=>setType(opt)}>
                    <div  className = {`radioicon ${ type === opt && "radioiconSelected"}`}  >
                      <img src={`./${opt}.png`} width="100%"/>
                    </div>
                    <p >{opt}</p>
                  </div>
                      )}
            </div>
            
              
            
                  <button className='btn '>Submit</button>
            
          </form>
          
    </div>
  )
}

export default AddNewEvent