import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

export const useSetEvent = () => {
    const { eventData, eventRun, selectedDesign, mode, colors, socketSpeakers } = useSelector( state => state.ui)

    // const [ update, setUpdate ] = useState(false)
    const [ eventToUpdate, setEventToUpdate ] = useState({})

    // console.log(eventRun)
    useEffect(()=> {
        setEventToUpdate({eventData, eventRun, selectedDesign, mode, colors, speakers: socketSpeakers?.length ? socketSpeakers : []})
    },[eventData, eventRun, selectedDesign, mode, colors, socketSpeakers])

    
    // console.log("useSEtevent ", socketSpeakers)
    
     return {eventToUpdate}

}