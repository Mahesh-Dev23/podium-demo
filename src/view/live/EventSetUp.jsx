import React from 'react'
import Welcome from './eventFlow/Welcome'
import EventFlow from './EventFlow'
import { useSelector } from 'react-redux'

const EventSetUp = ({eventToRun}) => {
  const adminView = useSelector(state => state.ui.adminUI)
 
  //console.log(adminView.adminView)
  return (
    <div className='eventSetUp'>
      
        { adminView.adminView === "View attendance" ?
           <Welcome />
           :
           <EventFlow eventToRun={eventToRun}/>
        }
        
        
    </div>
  )
}

export default EventSetUp