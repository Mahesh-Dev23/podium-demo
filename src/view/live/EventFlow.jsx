import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Welcome from './eventFlow/Welcome'
import CurrentSpeakers from './eventFlow/CurrentSpeakers'
import ThankYou from './eventFlow/ThankYou'
import { useDesign } from '../../hooks/useDesign'
import { oneEvent } from '../../features/event/eventSlice'
import {  setSocketData } from '../../features/ui/uiSlice'
import Circles from '../backgrounds/Circles'


const EventFlow = () => {
  // console.log("eventFlow")
    const { eventData, eventRun, selectedDesign, socketData } = useSelector( state => state.ui)
    
    const dispatch = useDispatch()

    
    // const [ selectedModule, setSelectedModule ] = useState('Circle')

    const [ width, setWidth ] = useState(0)
    
   
    const { design, names } = useDesign( width, true )


    useEffect(()=>{
      setWidth(document.getElementById('eventFlow').offsetWidth)
    },[])

    
        

    // useEffect(()=>{
    //   // if(design === undefined || names === undefined || selectedDesign === undefined) return
    //   // setDesign( selectedDesign )
    // },[selectedDesign])

    // console.log( eventRun?.eventSlot )
   
  return (
    <div className='eventFlow' id='eventFlow'> 
        {
           design !== undefined && design[ names.indexOf( selectedDesign ) ]?.module
        }
        
        <div className='eventPlay'>
          {   
              eventData === undefined || eventRun?.eventSlot === 0 ? 
                <Welcome />
              :
              eventRun?.eventSlot === eventData.eventList?.length - 1 ?
                <ThankYou />
              :
              eventRun?.eventSlot > 0 ?
                <div className='eventFlow'><CurrentSpeakers /></div>
              :
              null
          }
        </div>
        
    </div>
  )
}

export default React.memo(EventFlow) 