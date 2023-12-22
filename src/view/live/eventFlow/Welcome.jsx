import React,{useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import BrandingCenter from '../../inside/containers/BrandingCenter'
import BrandingTall from '../../inside/containers/BrandingTall'
import TextOpenTime from '../../inside/containers/TextOpenTime'

const Welcome = () => {
    const { eventData } = useSelector( state => state.ui.eventData)
    const { eventToRun } = useSelector( state => state.events)
    const designName = useSelector( state => state.ui.selectedDesign )
    const [dimension, setDimension] = useState({width:"0px", height: "0px"})

    useEffect(()=>{
      const x = document.getElementById("welcome")
      setDimension({width:`${x.offsetWidth}px`, height: `${x.offsetHeight}px`})
      
    },[])
    //console.log( designName)
    useEffect(()=>{ },[eventData])
    
  return (
    <div className="welcome " id="welcome">
      <div className={`loader ${designName} `}></div>
        { eventToRun !== undefined && Object.keys(eventToRun).includes("data") &&
            <>
              <h3>Welcome</h3>
              {/* <BrandingCenter /> */}
              <BrandingTall />
            </>
            
        }
        
    </div>
  )
}

export default Welcome