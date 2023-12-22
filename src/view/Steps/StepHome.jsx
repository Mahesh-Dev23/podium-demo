import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setModal, setEvent, setEventRun, setColors, setMode, setDesign } from '../../features/ui/uiSlice'
import { oneEvent } from '../../features/event/eventSlice'
import { useNavigate } from 'react-router-dom'
import { FaCalendarCheck, FaCalendarPlus, FaCheck, FaLongArrowAltRight } from "react-icons/fa"
import { BiCheckCircle, BiCalendarEvent, BiCalendarCheck, BiCalendarPlus, BiRightArrowAlt } from "react-icons/bi"
import pagination from '../../controllers/pagination'
import Button from '../inside/buttons/Button'
import setBackgroundColor from '../../controllers/setBackgroundColor'
import img from '../../event.png'

const StepHome = () => {

    const {modal, eventData} = useSelector(state => state.ui)
    const { eventToRun, event, events } = useSelector( state => state.events)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [ checkComplete, setCheckComplete ] = useState(false)
    const [ rightWidth, setRightWidth ] = useState(30)
    //console.log(modal)

    const [ arr, setArr ] = useState([])

    const selectEvent = e =>  dispatch(setModal({stat:true, content: e})) 

    // console.log(eventData)
    // console.log(event)
    useEffect(()=>{
        setBackgroundColor("stephome", false)
    },[])
    useEffect(()=> {
        setArr(pagination( event, 6))
      },[event])

    useEffect(()=>{
        // console.log( "eventToRun ", eventToRun )
        // console.log( "event ", event )
         
        if (eventToRun !== undefined && Object.keys(eventToRun).includes("data")) {
            dispatch(setDesign(eventToRun.selectedDesign))
            dispatch(setMode(eventToRun.mode))
            dispatch(setEventRun(eventToRun.eventRun))
            dispatch(setEvent(eventToRun.data))
            dispatch(setColors({
            'name': eventToRun.colors.name,
            'brandingDark': eventToRun.colors.brandingDark,
            'branding1': eventToRun.colors.branding1,
            'branding2': eventToRun.colors.branding2,
            'branding3': eventToRun.colors.branding3,
            'brandingLight': eventToRun.colors.brandingLight
            }))

            if( eventToRun.selectedDesign !== "" && Object.keys(eventToRun.colors).length !== 0 ){
                setCheckComplete(true)
            }
            
        }else{
            dispatch(setEvent(event))
        }
    },[ eventToRun, event ])  

    useEffect(()=> {
        
        if( Object.keys(eventData).length !== 0 &&  eventData.name !== '' ) return setBackgroundColor("stephome", true)
        // console.log(eventData)
    },[eventData])  

    
    const goTOEvent = (e)=>{
        if(Object.keys(eventData).length !== 0){
            dispatch(setEvent({...eventData, status:"design"}))
            dispatch(setEventRun({stat: "", eventSlot: 0}))
            // dispatch( oneEvent(eventData?.name) )
            navigate(e)
        }
    }

    // console.log(checkComplete)
  return (
    
        <div className="podium" id="stephome"  >
            {

            modal.stat === false &&
            <div className='joinCall' style={{width: "450px", padding: "40px 0"}}>
                    
                    {/* { Object.keys(eventData).length !== 0 ? */}
                            
                                <>
                                    { Object.keys(eventData).length !== 0 && <p> Launch</p> }
                                    <div className='title' onClick={() => goTOEvent("/event")} 
                                        style={{gridTemplateColumns:`1fr 30px`, alignItems: "start"}}
                                        
                                    > 
                                        
                                        <h3 className='podiumTitles' >{ Object.keys(eventData).length !== 0 ? eventData.name : 'Select event'} </h3>
                                        
                                        {
                                            checkComplete ? <Button icon={<BiCheckCircle />} text="Launch" direction="right" />
                                            : 
                                            <div  onClick={() => selectEvent("select")}>
                                                <Button icon={<BiCalendarCheck />} text="Select" direction="right" />
                                            </div>
                                        }    
                                        
                                    </div>
                                        
                                </>
                            
                         
                         {/* : 'Select event'}  */}
                    
                    <div></div>

                    <div style={{height: "30px", justifySelf:"stretch"}}></div>

                    
                    
                    <div className='inputTimeSlot' style={{justifySelf:"center", gridTemplateColumns:'repeat( 3, auto )', wodth:"390px"}}>
                        <div  onClick={() => selectEvent("select")}>
                               <Button icon={<BiCalendarCheck />} text="Select" direction="left" />
                        </div>
                        <div  onClick={() => selectEvent("create")}  style={{justifySelf:"center", gridTemplateColumns:'auto'}}>
                                <Button icon={<BiCalendarPlus />} text="Create" direction="left" /> 
                        </div>
                        {   Object.keys(eventData).length !== 0 &&
                            <div  onClick={() => goTOEvent("/design")}>
                                    <Button icon={<BiRightArrowAlt />} text="Design" direction="right" /> 
                            </div>
                        }
                    </div>
            </div>                    
            }
        </div>
            
    
  )
}

export default StepHome