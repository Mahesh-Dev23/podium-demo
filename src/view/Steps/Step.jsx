import React, { useState, useEffect} from 'react'
import EditSpeakers from '../events/EditSpeakers'
import { useSelector, useDispatch } from 'react-redux'
import { useDesign } from '../../hooks/useDesign'
import { FaPen } from 'react-icons/fa'
import { BiPencil, BiAddToQueue } from "react-icons/bi"
import { setModal, setEventRun } from '../../features/ui/uiSlice'
import TextOpenTime from '../inside/containers/TextOpenTime'
import Button from '../inside/buttons/Button'

const Step = ({ count }) => {
  
  const { event } = useSelector(state => state.events)
  const { eventData, eventRun, selectedDesign } = useSelector(state => state.ui)

  const [ width, setWidth ] = useState(0)
  const { design, names } = useDesign( width )
  
  const dispatch  = useDispatch()
    
  const editSection = () => {
    dispatch(setModal({stat: true, content: "edit slot"}))
    //dispatch(setEventRun({stat: true, eventSlot: count}))
  }

  useEffect(()=>{setWidth(document.getElementById('showDesign').offsetWidth)},[])
   
  return (
    
    <div className='slide' >

        <div className='title' onClick={() => editSection()} > 
            
            <h3 className='podiumTitles' >{`
            ${eventData.eventList[count ].title}:  
            ${eventData.eventList[count ].time} minutes`} 
            
            </h3>
                
            <Button icon={<BiPencil />} text="Edit" direction="right" />
        </div>
      
      
      <div id='showDesign'>
        { design && names && selectedDesign && design[names.indexOf(selectedDesign)].module }

        <div className='eventPlay' style={{alignContent: "center", justifyContent:"center"}}>
          
            <div style={{justifySelf:"center"}}><TextOpenTime text={eventData.eventList[count].title}/></div>
          
            <EditSpeakers />

        </div>

      </div>
      
      

      
    </div>
  )
}

export default Step