import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { setEventRun, setModal, setEvent, setAllUser } from '../../../features/ui/uiSlice'
import { eventForRun } from '../../../features/event/eventSlice'

import { useSetEvent } from '../../../hooks/useSetEvent'
// import { io } from "socket.io-client"
// const socket = io()

const SlideBar = ({arr, count}) => {
    const { eventData, eventRun } = useSelector( state => state.ui )
    const dispatch = useDispatch()
    // const socket = io().connect(process.env.backEnd_Url)

    // const {eventToUpdate} = useSetEvent() 

    const slideTo = (index) => {
      //  console.log(index)
      dispatch(setEventRun({stat: "", eventSlot: index}))
      //  socket.emit("Slide to", index  )
    }

    // useEffect(()=>{
    //   if(eventData.status === "run"){
    //     dispatch( eventForRun( eventToUpdate ))
    //   }
    // },[eventRun])

    // console.log(eventToUpdate.eventRun?.eventSlot)

  return (
    <div className='sliderBar' style={{width: `calc(${ arr.length}* 20px)`, gridTemplateColumns: `repeat(${arr.length}, 1fr)`}}>
    {
        arr && arr.map((value, index)=> 
                    
            <div className='sliderdots' 
                onClick={() => slideTo( index )}
                style={{background: index === count ?`rgba(var(--podium1), 1)` : `rgba(var(--podium3), 0.1)`}}
                key={`count ${index}`}>
                <p>{  index + 1 }</p>
            </div>               
        ) 
    }
    </div>
  )
}

export default SlideBar