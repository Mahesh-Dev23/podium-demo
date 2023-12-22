import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import AddDesignSpeakers from './eventFlow/AddDesignSpeakers'
import { useDesign } from '../../hooks/useDesign'
import TextOpenTime from '../inside/containers/TextOpenTime'

const DesignFlow = () => {
    const { eventData, eventRun, selectedDesign } = useSelector( state => state.ui)
    const [ width, setWidth ] = useState(0)
    const { design, names } = useDesign( width, true )

    useEffect(()=>{
        setWidth(document.getElementById('eventFlow').offsetWidth)
      },[])

     
  return (
    // eventData && eventData.eventList && 
    <div className='eventFlow' id='eventFlow' > 
        {
          design && names && selectedDesign && 
          design[ names.indexOf( selectedDesign ) ].module
        }
        
        <div className='eventPlay' style={{placeContent: "center", justifyItems: "stretch", justifyContent: "stretch"}}>
          {  eventData && eventRun.eventSlot === 0 ? 
                <div style={{justifySelf:"center"}}>
                    <TextOpenTime text={eventData.eventList[0].title}/>
                </div>
              :
              eventRun.eventSlot === eventData.eventList.length - 1 ?
                <div style={{justifySelf:"center"}}>
                    <TextOpenTime text={eventData.eventList[eventData.eventList.length - 1].title}/>
                </div>
              :
              eventRun.eventSlot > 0 ?
                <div className='designFlow'>
                  {/* <div style={{justifySelf:"center"}}>
                    <TextOpenTime text={eventData.eventList[eventRun.eventSlot].title}/>
                  </div> */}
                  <AddDesignSpeakers />
                </div>
              :
              null
          }

        </div>
        
    </div>
  )
}

export default DesignFlow