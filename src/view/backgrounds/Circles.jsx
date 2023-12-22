import React, { useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import DarkToggle from '../inside/buttons/DarkToggle'
import Branding from '../inside/containers/Branding'
import BrandingCenter from '../inside/containers/BrandingCenter'

const Circles = ({width, height, branding}) => {
    const { eventData, eventRun, colors, modal, mode } = useSelector( state => state.ui )
    const clip = useSelector( state => state.ui.clipWidth)
    
    
    const [mainWidth, setMainWidth] = useState(width)

    const [oneUnitHeight, setOneUnitHeight ] = useState(0)
    const [oneUnitWidth, setOneUnitWidth ] = useState(0)
      

    useEffect(()=>{ if(width > 0) {
       setMainWidth(width) 
       setOneUnitHeight(height / 10)
       setOneUnitWidth(height / 10)
    }  
    
    },[width])

    //console.log( mode + ": " + width)
    

    
    const circleStyles ={
        main:{
            overflow: "hidden",
            position: "relative",
            background: `rgba(${colors.brandingDark}, 1)`,
            backgroundImage: `radial-gradient( circle, rgba(${colors.branding3}, 1), rgba(${colors.brandingDark},.5))`,
            border: "0px solid red",
        },
        
        circleMain : {
            width: mainWidth,
            aspectRatio: 1/1,
            borderRadius:"50%",
            border: `${mainWidth/6}px solid rgba(${colors.branding3}, .6)`,
            position: "absolute",
            top: oneUnitHeight * 3,
            left: "45%",
        },
        circle2 : {
            width: `${mainWidth/5}px`,
            height: `${mainWidth/5}px`,
            aspectRatio: 1/1,
            borderRadius:"50%",
            background: ` rgba(${colors.branding1}, .2)`,
            // background: "red",
            position: "absolute",
            top:`-${(mainWidth/10)}px`,
            right: 0,
           
        },
        brandPosition :{
            width: `${mainWidth/5}px`,
            // border : "1px solid red",
            position: "absolute",
            display: "grid",
            alignItems: "center",
            jusifyContent: "center",
            top: "10px",
            right: 0,
        },
        logo:{
            height: "30px",
        }
    }

    const circleStylesLight ={
        main:{
            overflow: "hidden",
            position: "relative",
            background: `rgba(${colors.brandingLight}, 1)`,
            backgroundImage: `radial-gradient( circle, rgba(${colors.brandingLight}, .4), rgba(${colors.branding2},.2))`,
            border: "0px solid red",
        },
        
        circleMain : {
            width: mainWidth,
            aspectRatio: 1/1,
            borderRadius:"50%",
            border: `${mainWidth/6}px solid rgba(${colors.branding1}, .2)`,
            
            position: "absolute",
            top: oneUnitHeight * 3,
            left: "45%",
        },
        circle2 : {
            width: `${mainWidth/5}px`,
            height: `${mainWidth/5}px`,
            aspectRatio: 1/1,
            borderRadius:"50%",
            background: ` rgba(${colors.branding1}, .1)`,
            // background: "red",
            position: "absolute",
            top:`-${(mainWidth/10)}px`,
            
           
        },
        brandPosition :{
            width: `${mainWidth/5}px`,
            // border : "1px solid red",
            position: "absolute",
            display: "grid",
            alignItems: "center",
            jusifyContent: "center",
            top: "10px",
        },
        logo:{
            height: "30px",
        }
    }


  return (
    mode ? 
        <div className='circleBox' style={ circleStyles.main  } id="mainCircle" >
        
            <div  style={circleStyles.circleMain}></div>
            <div  style={circleStyles.circle2}></div>
            <div style={circleStyles.brandPosition} >
                { branding && eventRun?.eventSlot > 0 && <BrandingCenter height={oneUnitHeight}/> }
            </div>
            {/* <DarkToggle /> */}
        </div>
    :
        <div className='circleBox' style={ circleStylesLight.main  } id="mainCircle" >
        
            <div  style={circleStylesLight.circleMain}></div>
            <div  style={circleStylesLight.circle2}></div>
            <div style={circleStyles.brandPosition} >
                { eventRun?.eventSlot > 0 && <BrandingCenter height={oneUnitHeight}/> }
            </div>
            {/* <DarkToggle /> */}
        </div>
    
    
  )
}

export default Circles