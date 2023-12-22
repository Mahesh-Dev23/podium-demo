import React, {useState, useEffect} from 'react'
import SelectDesign from '../inside/SelectDesign'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../inside/buttons/Button'
import DesignFlow from '../live/DesignFlow'
import { setEvent, setEventRun, setMode, setColors } from '../../features/ui/uiSlice'
import { editEvent, eventForRun, oneEvent, isSuccess } from '../../features/event/eventSlice'
import { BiPalette, BiRightArrowAlt, BiLeftArrowAlt, BiLandscape } from "react-icons/bi"
import DesignOptions from '../live/DesignOptions'
import ColorOptions from '../live/ColorOptions'
import SlideBar from '../inside/containers/SlideBar'
import changeColors from '../../controllers/changeColors'
import { useSetEvent } from '../../hooks/useSetEvent'


const Design = () => {
    const { eventData, eventRun, selectDesign, colors } = useSelector( state => state.ui)
    const { eventToRun,  isSuccess } = useSelector( state => state.events)
    const [design, setDesign ] = useState(true)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { eventToUpdate } = useSetEvent()

    useEffect(()=>{ 
            changeColors(colors)
    },[])

    useEffect(()=>{
        
        
        // if (!eventToRun){
        //     changeColors(colors)
        // }else if (Object.keys(eventToRun).includes("data")) {
        //     changeColors(eventToRun.colors)
        // }else{
        //     changeColors(colors)
        // }    
    },[eventData])


    useEffect(() => {
            
        dispatch( editEvent( eventData ) )
        dispatch( eventForRun( eventToUpdate ))

        if(isSuccess){
            // dispatch(oneEvent(eventData?.name))
        }
            
    },[ eventToUpdate, isSuccess ])

    const eventCatch = () => {
        if (!eventToRun) return
        if (Object.keys(eventToRun).includes("data")) {
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
            
        }
    }
    // useEffect(() => {
    //     // eventCatch()
    //     console.log(eventToRun)
    // },[eventToRun])

    const goTOEvent = ()=>{
        if(SelectDesign !== ''){
            dispatch(setEvent({...eventData, status:"edit"}))
            dispatch(setEventRun({stat: "", eventSlot: 0}))
            navigate('/edit-event')
        }
    }
    
    const goBack = () => {
        navigate('/home')
    }

    //console.log(eventData)
  return (
    <div className='podium' >
        <div className='design' >
            <div className='hostView' style={{alignSelf:"Stretch", gridTemplateColumns:"65% 35%"}}>
                
                <div className='videoLeft' style={{background: "white", alignItems: "start"}}> 
                    {
                        eventData && eventData.eventList && 
                        <>
                            <DesignFlow />
                            <SlideBar arr={eventData.eventList} count={eventRun.eventSlot}/>
                        </>
                    }
                    <p className='itext' style={{justifySelf:"center", alignSelf:"end"}}>Browser slides now, you can edit them in next step.</p>
                </div>

                <div className="hostpanel"style={{background: "white", padding: 0, alignItems:"start stretch", borderRadius:"10px"}}> 
                    { design ? 
                    <>
                        <DesignOptions />
                        <div className='inputTimeSlot' style={{ alignSelf:"end", paddingBottom: "10px"}}>
                            <p className='itext' style={{justifySelf:"end"}} >
                                Click to change colors
                            </p>
                            <div onClick={() => setDesign(false)} > 
                                <Button icon={<BiPalette />} text="Colors" direction="right"  />
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <ColorOptions />
                        <div className='inputTimeSlot' style={{ alignSelf:"end", paddingBottom: "10px"}}>
                           
                            <p className='itext' style={{justifySelf:"end"}} >
                                Click to change design
                            </p>
                            <div onClick={() => setDesign(true)} > 
                                <Button icon={<BiLandscape />} text="Design" direction="right"  />
                            </div>
                        </div>
                    </>
                }
                    
                
                </div>
                
            </div>
            
            
            
        </div>
        <div className='inputTimeSlot' style={{marginTop:"30px", justifySelf: "center"}}>
                <div onClick={() => goBack()} style={{justifySelf:"end"}}> 
                    <Button icon={<BiLeftArrowAlt />} text="Back" direction="left"  />
                </div>
                <div  onClick={() => goTOEvent()} > 
                    <Button icon={<BiRightArrowAlt />} text="Next" direction="right" />
                </div>
        </div>
        
    </div>
  )
}

export default Design