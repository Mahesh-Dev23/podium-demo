import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { reset, incrementTimer, setEvent } from '../../../features/ui/uiSlice'

const EventTitle = () => {
  const eventData = useSelector( state => state.ui.eventData)
  return (
    <div className='eventTitle'>{eventData.name}</div>
  )
}

export default EventTitle