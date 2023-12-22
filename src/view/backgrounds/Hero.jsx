import React,{useEffect, useState} from 'react'
import {useSelector} from 'react-redux'

import BrandingCenter from '../inside/containers/BrandingCenter'

import Branding from '../inside/containers/Branding'
import BrandingTall from '../inside/containers/BrandingTall'
import DarkToggle from '../inside/buttons/DarkToggle'

const Hero = ({width, height}) => {
    const { eventData, eventRun, colors, modal, mode } = useSelector( state => state.ui )
    const clip = useSelector( state => state.ui.clipWidth)
    
    
    const [mainWidth, setMainWidth] = useState(width)

    const [oneUnitHeight, setOneUnitHeight ] = useState(0)
    const [oneUnitWidth, setOneUnitWidth ] = useState(0)
      
    
    const [ title, setTitle ] = useState()

    useEffect(()=>{ if(width > 0) {
       setMainWidth(width) 
       setOneUnitHeight(height / 10)
       setOneUnitWidth(height / 10)
    }  
    
    },[width])

    const hero = {
        main:{
            
            background:`rgb(${colors.brandingDark})`,
            backgroundImage: `linear-gradient(190deg, rgba(${colors.brandingDark}, 0.7),  rgba(${colors.branding3}, .7))`,
            
        },
        rect:{
            width: `${oneUnitWidth*16.6}px`,
            height: `${oneUnitWidth*16.6}px`,
            borderRadius: "15%",
            backgroundImage: `linear-gradient( rgba(${colors.brandingDark}, .3), rgba(${colors.brandingDark},.3))`,
            overflow: "hidden",
            position: "absolute",
            top: `${-oneUnitHeight*3.5}px`,
            left: `${-oneUnitWidth*4}px`,
            transform: "rotate(45deg)",
            display: "grid",
            placeContent: "center",
        },
        rect2:{
            width: `${oneUnitWidth*16.5}px`,
            height: `${oneUnitWidth*16.5}px`,
            borderRadius: "15%",
            backgroundImage: `linear-gradient( 45deg,  rgba(${colors.branding1}, .7), rgba(${colors.branding1}, .5) 30%, rgba(${colors.branding1}, 0), rgba(${colors.branding1}, 0) 70%,  rgba(${colors.branding1}, .8))`,
            overflow: "hidden",
            // position: "absolute",
            // top: `${oneUnitHeight*2}px`,
            display: "grid",
            placeContent: "center",
        },
        rect3:{
            width: `${oneUnitWidth*16.4}px`,
            height: `${oneUnitWidth*16.4}px`,
            aspectRatio: 1/1,
            borderRadius: "15%",
            backgroundImage: `linear-gradient( 20deg, rgba(${colors.brandingDark}, .8), rgba(${colors.branding3},.9))`,
            overflow: "hidden",
            // position: "absolute",
            // top: `${oneUnitHeight*2}px`,
            
        },
        circle:{
            position: "absolute",
            top: `${oneUnitHeight*3}px`,
            right: `${-oneUnitWidth*1.6}px`,
            width: `${oneUnitWidth*4}px`,
            height:`${oneUnitWidth*4}px`,
            borderRadius: "50%",
            border:`${oneUnitWidth/14}px solid rgba(${colors.branding1}, .8)`,
            backgroundImage: `linear-gradient(140deg, rgba(${colors.branding3}, 1), rgba(${colors.brandingDark}, 0.3))`,
            display: "grid",
            justifyContent: "start",
            alignItems:"center",
            padding: `0 ${oneUnitWidth*0.8}px`,
            boxShadow:`0px 0px 10px rgba(${colors.brandingDark}, .8)`,
        },
        brandPosition :{
           
            border: "0px solid red",
            width: `${oneUnitWidth*3.5}px`,
            height:`${oneUnitWidth*3.5}px`,
            borderRadius: "50%",
            border:`${oneUnitWidth/5}px solid rgba(${colors.branding1}, 1)`,
            backgroundImage: `linear-gradient(to bottom, rgba(${colors.branding3}, 1), rgba(${colors.branding2}, 0.3))`,
            display: "grid",
        }
    }


    const heroLight = {
        main:{
            
            background:`rgb(${colors.brandingLight})`,
            backgroundImage: `linear-gradient(190deg, rgba(${colors.branding2}, 0.1),  rgba(${colors.branding3}, .6))`,
            
        },
        rect:{
            width: `${oneUnitWidth*16.6}px`,
            height: `${oneUnitWidth*16.6}px`,
            borderRadius: "15%",
            backgroundImage: `linear-gradient( rgba(${colors.brandingDark}, 0), rgba(${colors.brandingDark},0))`,
            overflow: "hidden",
            position: "absolute",
            top: `${-oneUnitHeight*3.5}px`,
            left: `${-oneUnitWidth*4}px`,
            transform: "rotate(45deg)",
            display: "grid",
            placeContent: "center",
        },
        rect2:{
            width: `${oneUnitWidth*16.5}px`,
            height: `${oneUnitWidth*16.5}px`,
            borderRadius: "15%",
            backgroundImage: `linear-gradient( 45deg,  rgba(${colors.branding1}, .2), rgba(${colors.branding1}, .5) 30%, rgba(${colors.branding1}, 0), rgba(${colors.branding1}, 0) 70%,  rgba(${colors.branding1}, .8))`,
            overflow: "hidden",
            // position: "absolute",
            // top: `${oneUnitHeight*2}px`,
            display: "grid",
            placeContent: "center",
        },
        rect3:{
            width: `${oneUnitWidth*16.4}px`,
            height: `${oneUnitWidth*16.4}px`,
            aspectRatio: 1/1,
            borderRadius: "15%",
            backgroundImage: `linear-gradient( 20deg, rgba(${colors.branding2}, .3), rgba(${colors.brandingLight},.8))`,
            overflow: "hidden",
            // position: "absolute",
            // top: `${oneUnitHeight*2}px`,
            
        },
        circle:{
            position: "absolute",
            top: `${oneUnitHeight*3}px`,
            right: `${-oneUnitWidth*1.6}px`,
            width: `${oneUnitWidth*4}px`,
            height:`${oneUnitWidth*4}px`,
            borderRadius: "50%",
            border:`${oneUnitWidth/14}px solid rgba(${colors.branding1}, .5)`,
            backgroundImage: `linear-gradient(100deg, rgba(${colors.brandingLight}, .7), rgba(${colors.branding1}, 0.3))`,
            display: "grid",
            justifyContent: "start",
            alignItems:"center",
            padding: `0 ${oneUnitWidth*0.8}px`,
            // boxShadow:`0px 0px 10px rgba(${colors.brandingDark}, .8)`,
        },
        brandPosition :{
           
            border: "0px solid red",
            width: `${oneUnitWidth*3.5}px`,
            height:`${oneUnitWidth*3.5}px`,
            borderRadius: "50%",
            border:`${oneUnitWidth/5}px solid rgba(${colors.branding1}, 1)`,
            backgroundImage: `linear-gradient(to bottom, rgba(${colors.branding3}, 1), rgba(${colors.branding2}, 0.3))`,
            display: "grid",
        }
    }



  return (
    mode ?
        <div style={hero.main} id="mainBg">
            
            <div style={hero.circle}>
                { eventRun.eventSlot > 0 && <BrandingTall height={oneUnitHeight}/> }
            </div>
            <div style={hero.rect}>
                <div style={hero.rect2}>
                    <div style={hero.rect3}></div>
                </div>
            </div>
            {/* <DarkToggle /> */}
        </div>
    :
        <div style={heroLight.main} id="mainBg">
            
            <div style={heroLight.circle}>
                { eventRun.eventSlot > 0 && <BrandingTall height={oneUnitHeight}/> }
            </div>
            <div style={heroLight.rect}>
                <div style={heroLight.rect2}>
                    <div style={heroLight.rect3}></div>
                </div>
            </div>
            // <DarkToggle />
        </div>
  )
}

export default Hero