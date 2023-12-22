import React,{useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllEvents, singleEvent } from '../../features/event/eventSlice'

import PaginationSlider from './PaginationSlider'
import pagination from '../../controllers/pagination'



const Events = () => {
    const dispatch = useDispatch()
    
    const { events } = useSelector( state => state.events )
    
    const [ arr, setArr ] = useState([])
    //console.log(events)
    
    useEffect(()=> { setArr(pagination(events, 5))},[events])

    useEffect(()=>{
        dispatch(getAllEvents())
    }, [dispatch])

    

    //console.log(arr)

  return (
    <div>
        <h3 className='podiumTitles'>Select from Events</h3>
        { 
            events &&  <PaginationSlider arr= { arr } users = {"eventSlide"} />
        }
        
    </div>
  )
}

export default Events