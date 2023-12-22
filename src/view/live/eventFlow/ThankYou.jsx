import React,{useEffect} from 'react'
import TextOpenTime from '../../inside/containers/TextOpenTime'
import timerun from '../../../controllers/timerun'

import { useSelector, useDispatch  } from 'react-redux'
import { setEventRun, setAdnimUI } from '../../../features/ui/uiSlice'

const ThankYou = () => {
  const {eventData, eventRun} = useSelector(state => state.ui)
  const designName = useSelector( state => state.ui.selectedDesign )
  const dispatch = useDispatch()
  
  useEffect(()=>{ 
    
    // timerun( eventData.eventList[eventData.eventList.length - 1].time * 100)
    //       .then( (res) => { console.log(res)
    //         // console.log("17 thank you")
    //         // dispatch(setEventRun({stat: "", eventSlot: 0}))
    //         // //dispatch(setEventRun({...eventRun, eventSlot: 0}))
            
    //       })
  },[])


  return (
    <div className="welcome " >
        <div className={`loader ${designName} `}></div>
        <TextOpenTime text={eventData.eventList[eventRun.eventSlot].title}/>
             
    </div>
  )
}

export default ThankYou