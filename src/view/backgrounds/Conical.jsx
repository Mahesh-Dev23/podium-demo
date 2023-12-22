import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import DarkToggle from '../inside/buttons/DarkToggle'

const Conical = ({width, height}) => {
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


    const conical = {
        backdrop:{
            background:`rgb(${colors.branding3})`,
            backgroundImage: `conic-gradient(  at 0% 0%,  rgba(${colors.branding1}, 0.3) 40deg 70deg, rgba(${colors.brandingDark}, 0.6) 100deg 120deg, rgba(${colors.brandingLight}, 0.2)140deg 160deg, rgba(${colors.branding2},.6)190deg 210deg,
                                rgba(${colors.brandingDark},0.6)240deg 280deg, rgba(${colors.branding1}, 0.4)340deg 30deg)`,
            // width: `${width}px`,
            // heigth: `${(width / 16) * 9}px`,
            // position: "relative",
            zIndex: 10,
        },
        circleMain : {
          width: `${oneUnitWidth*32}px`,
          height: `${oneUnitWidth*32}px`,
          borderRadius:"50%",
          background: `rgba(${colors.brandingDark}, .3)`,
          border: `${mainWidth/5}px solid rgba(${colors.branding3}, .5)`,
          // background: "red",
          position: "absolute",
          top: `-${oneUnitWidth*15}px`,
          left: `-${oneUnitWidth*15}px`,
          display: "flex",
          alignItem: "center",
          justifyContent: "center"
      },
      circle2 : {
          width: `${oneUnitWidth*18}px`,
          height: `${oneUnitWidth*18}px`,
          aspectRatio: 1/1,
          borderRadius:"50%",
          border: `${mainWidth/5}px solid rgba(${colors.branding3}, .6)`,
          margin: "auto",
          display: "flex",
          alignItem: "center",
          justifyContent: "center"
          
      },
      circle3 : {
        width: `${oneUnitWidth*4.5}px`,
        aspectRatio: 1/1,
        borderRadius:"50%",
        background: `rgba(${colors.branding1}, .4)`,
        margin: "auto",
        
    },
      brandPosition :{
          position: "absolute",
          top: 0,
          left: "3%",
          border: "0px solid red",
          width: "27%",
          height:"7%",
          zIndex: 1,
          display: "grid",
      }
    }

    const conicalLight = {
      backdrop:{
          background:`rgb(${colors.brandingLight})`,
          backgroundImage: `conic-gradient(  at 0% 0%,  rgba(${colors.branding3}, 0.3) 40deg 70deg, rgba(${colors.branding3}, 0.3) 100deg 120deg, rgba(${colors.brandingLight}, 0.2)140deg 160deg, rgba(${colors.branding2},.7)190deg 210deg,
                              rgba(${colors.brandingLight},0.6)240deg 280deg, rgba(${colors.branding3}, 0.4)340deg 30deg)`,
          
      },
      circleMain : {
        width: `${oneUnitWidth*32}px`,
        height: `${oneUnitWidth*32}px`,
        borderRadius:"50%",
        background: `rgba(${colors.branding2}, 0)`,
        border: `${mainWidth/5}px solid rgba(${colors.branding2}, .1)`,
        // background: "red",
        position: "absolute",
        top: `-${oneUnitWidth*15}px`,
        left: `-${oneUnitWidth*15}px`,
        display: "flex",
        alignItem: "center",
        justifyContent: "center"
    },
    circle2 : {
        width: `${oneUnitWidth*18}px`,
        height: `${oneUnitWidth*18}px`,
        aspectRatio: 1/1,
        borderRadius:"50%",
        border: `${mainWidth/5}px solid rgba(${colors.branding2}, .1)`,
        margin: "auto",
        display: "flex",
        alignItem: "center",
        justifyContent: "center"
        
    },
    circle3 : {
      width: `${oneUnitWidth*4.5}px`,
      aspectRatio: 1/1,
      borderRadius:"50%",
      background: `rgba(${colors.branding1}, .2)`,
      margin: "auto",
      
  },
    brandPosition :{
        position: "absolute",
        top: 0,
        left: "3%",
        border: "0px solid red",
        width: "27%",
        height:"7%",
        zIndex: 1,
        display: "grid",
    }
  }


  return (
    mode ? 
      <div style={conical.backdrop} id="mainConical">
          <div  style={conical.circleMain}>
            <div  style={conical.circle2}>
              <div style={conical.circle3}></div>
            </div>
          </div>
          {/* <DarkToggle /> */}
      </div>
    :
      <div style={conicalLight.backdrop} id="mainConical">
        <div  style={conicalLight.circleMain}>
          <div  style={conicalLight.circle2}>
            <div style={conicalLight.circle3}></div>
          </div>
        </div>
        {/* <DarkToggle /> */}
      </div>
  )
}

export default Conical