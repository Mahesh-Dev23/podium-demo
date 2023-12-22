import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'

import SingleVideo from '../../inside/containers/SingleVideo'
import Loader from '../../inside/containers/Loader'
import timerun from '../../../controllers/timerun'
import TextOpenTime from '../../inside/containers/TextOpenTime'
import { useDesign } from '../../../hooks/useDesign'

const AddDesignSpeakers = () => {
    const {eventData, eventRun, selectedDesign} = useSelector(state => state.ui)
    const [ currentSpeakers, setCurrentSpeakers ] = useState([])

    const [ videoRow, setVideoRow ] = useState(1)
    const [ timeLoader, setTimeLoader ] = useState(0)
    const [ alignment, setAlignment ] = useState("center")
    const { design, names } = useDesign()

    // layout alignment -----------------------------------------------------
    useEffect(()=>{
        if( design && names && selectedDesign !== ''){
          setAlignment(design[names.indexOf(selectedDesign)].align)
        }
  
      },[design, names, selectedDesign])
      // div elements for videos as per speakers list length ------------------
    
      const videoRowLength = async () => {
        //videoRow = userNames.length
        //console.log(userNames.length)
        if(currentSpeakers.length === 0) return setVideoRow(1) 
  
        if( currentSpeakers.length > 2 ) {
          setVideoRow( Math.round( currentSpeakers.length / 2 ))
        } else{
          setVideoRow( currentSpeakers.length)
        }
      }
      
      useEffect(()=> {
          //console.log("current speakers", eventData.eventList[eventRun.eventSlot].speakers)
          setCurrentSpeakers(eventData.eventList[eventRun.eventSlot].speakers)  
      },[eventData])
  
      useEffect(()=> {  videoRowLength() },[currentSpeakers])

  return (
    
        <div className={`slideLayout-${alignment}`}>
            <div style={{justifySelf:"center"}}>
                    <TextOpenTime text={eventData.eventList[eventRun.eventSlot].title}/>
            </div>
            { eventData.eventList[eventRun.eventSlot].type === "Presentation" ?
              <div  className='presentationSlide' 
                    style={{  gridTemplateColumns: `25% 75%`,
                              width: `100%`
                              }}>
                  { eventRun.status === "edit" ? currentSpeakers?.map( res => <SingleVideo vidId={res} key={res.name.replace(' ', '-')}/> ) 
                    : <div className='agVideo' ></div>
                  }  

                  <div className='presentor agVideo' id='presentor' > </div>                         
              </div>
              :
              eventRun.status === "edit" ? 
                <div  className='allUsers' 
                      style={{gridTemplateColumns:videoRow === 1 ? `100%` : `repeat(${videoRow}, minmax(100px, 1fr))`,
                      width:videoRow === 1 ? `70%` : `80%`
                      }}>
                        {currentSpeakers?.map( res => <SingleVideo vidId={res} key={res.name.replace(' ', '-')}/>)}
                </div>    
                  
              : eventData.eventList[eventRun.eventSlot].type === "TwoVideos" ?
                <div className='allUsers' style={{gridTemplateColumns:"1fr 1fr", width: "98%"}}>
                  <div className='agVideo' ></div>
                  <div className='agVideo' ></div>
                </div>
              : eventData.eventList[eventRun.eventSlot].type === "Multiscreen" ?
                <div className='allUsers' style={{gridTemplateColumns:"1fr 1fr 1fr", width: "98%"}}>
                  <div className='agVideo' ></div><div className='agVideo' ></div><div className='agVideo' ></div>
                  <div className='agVideo' ></div><div className='agVideo' ></div><div className='agVideo' ></div>
                </div>
              : <div className='allUsers' style={{gridTemplateColumns:"1fr", width: "80%"}}>
                  <div className='agVideo' ></div>
                </div>
                    
              
              
            }
      </div>
    
  )
}

export default AddDesignSpeakers