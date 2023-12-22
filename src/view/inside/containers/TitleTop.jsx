import React, { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const TitleTop = () => {

     const { eventData, eventRun } = useSelector(state => state.ui)
   return (
     <div className='titleTop'>
        
         { eventData === undefined || eventRun  === undefined  ? 
            <h3 className='podiumTitles'>Section Title</h3> 
        : eventData.eventList[eventRun?.eventSlot] !== undefined  ?  
            <h3 className='podiumTitles'>{eventData.eventList[eventRun.eventSlot ].title}</h3> 
        :
            <div></div>
         }
     </div>
  )
}

export default memo(TitleTop)