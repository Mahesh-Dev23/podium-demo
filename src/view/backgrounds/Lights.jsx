import React,{useEffect, useState} from 'react'
import {useSelector} from 'react-redux'

const Lights = ({width, height, branding}) => {
  const { eventData, eventRun, colors, modal, mode } = useSelector( state => state.ui )    
    
    const [ mainWidth, setMainWidth ] = useState(width)

    const [oneUnitHeight, setOneUnitHeight ] = useState(0)
    const [oneUnitWidth, setOneUnitWidth ] = useState(0)

    useEffect(()=>{ if(width > 0) {
      setMainWidth(width) 
      setOneUnitHeight(height / 10)
      setOneUnitWidth(height / 10)
   }  
   
   },[width])

    const lightStyles ={
        main:{
          overflow: "hidden",
          position: "relative",
          background: `rgba(${colors.brandingDark}, 1)`,
          backgroundImage: `linear-gradient(  rgba(${colors.branding3}, 1), rgba(${colors.brandingDark},1)70%)`,
          
        },
        light : {
            width: "100%",
            aspectRatio: 1/1,
            borderRadius:"50%",
            border: `${mainWidth/6}px solid rgba(${colors.branding2}, .6)`,
            // background: "red",
            position: "absolute",
            top: "30%",
            left: "45%",
            
        },
        circle2 : {
            width: `${mainWidth/10}px`,
            aspectRatio: 1/1,
            borderRadius:"50%",
            border: `${mainWidth/6}px solid rgba(${colors.branding1}, .5)`,
            // background: "red",
            position: "absolute",
            top:"-40%",
            // left: "0",
            
        }
    }
    const lightStylesLight ={
      main:{
        overflow: "hidden",
        position: "relative",
        background: `rgba(${colors.brandingLight}, 1)`,
        backgroundImage: `linear-gradient(  rgba(${colors.brandingLight}, 1), rgba(${colors.branding2},.3)70%)`,
        
      },
      light : {
          width: "100%",
          aspectRatio: 1/1,
          borderRadius:"50%",
          border: `${mainWidth/6}px solid rgba(${colors.branding2}, .6)`,
          // background: "red",
          position: "absolute",
          top: "30%",
          left: "45%",
          
      },
      circle2 : {
          width: `${mainWidth/10}px`,
          aspectRatio: 1/1,
          borderRadius:"50%",
          border: `${mainWidth/6}px solid rgba(${colors.branding1}, .5)`,
          // background: "red",
          position: "absolute",
          top:"-40%",
          // left: "0",
          
      }
  }
  return (
    mode ? 
      <div style={ lightStyles.main  } id="mainLights">
          <div className='light x1'></div> 
          <div className='light x2'></div>
      </div>
    :
    <div style={ lightStylesLight.main  } id="mainLights">
      <div className='light x1'></div> 
      <div className='light x2'></div>
    </div>
  )
}

export default Lights