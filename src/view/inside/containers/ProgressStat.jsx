import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import secondCounter from '../../../controllers/secondCounter'

const ProgressStat = ({ eventData, eventSlot }) => {
    //const { eventData, eventRun } = useSelector(state => state.ui)
    
    const [ slot, setSlot ] = useState(0)
    const [ time, setTime ] = useState()
    const [ percentage, setPercentage ] = useState(0)
    //console.log("progess")
    //console.log("progess",eventRun)
    //console.log("progess",eventData)

    const progressBarUpdate = () => {
        //console.log("progressBarUpdate")
        setSlot(slot + 1)
        // secondCounter()
        //     .then(() => { setSlot(slot + 1) })
    }
    
    
    
    useEffect(()=> {
        setTime(0)
        setSlot(1)
        progressBarUpdate()         
        setPercentage(0)
        //document.getElementById("progressCompleted").style.background = "0, 215, 184"      
    },[])

    useEffect(()=> { 
        if(eventData === undefined) return
        setPercentage(0)
        //document.getElementById("progressCompleted").style.background = "0, 215, 184"
        progressBarUpdate()
        setTime(eventData.time)
    },[eventData])
    //useEffect(()=> { progressBarUpdate()},[eventSlot])
    

    useEffect(()=> {
        // console.log("progress")
        // console.log( slot, " ", time)
        //progressBarUpdate()
        setPercentage( (100/time) * slot )

        if( slot === time  ) {
            secondCounter()
            .then(() => { setSlot(0) })
            
        } else
        if( slot > 0 && slot < time  ){
            
            secondCounter()
            .then(() => { progressBarUpdate() })
        }
        
    },[slot])

    useEffect(()=> {
        if(percentage > 80){
            document.getElementById("progressCompleted").style.background = "red"
        } else if(percentage < 80){
            document.getElementById("progressCompleted").style.background = "rgb(0, 215, 184)"
        }

    },[percentage])

   
    //console.log( slot, " ", time)

  return (
    <div className='progress'>
        <div 
            id='progressCompleted' 
            style={{width:`${percentage}%`}}
        >
            {`${slot * (100/time)}%`}                        
        </div>
    </div>
  )
}

export default ProgressStat