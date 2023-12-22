import React,{ useState, useEffect} from 'react'
import { useSelector } from 'react-redux'

import Branding from '../inside/containers/Branding'
import DarkToggle from '../inside/buttons/DarkToggle'


const Trio = ({width, height}) => {
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

    const trio = {
        main:{
            overflow: "hidden",
            position: "relative",
            background:`rgb(${colors.brandingDark})`,
            backgroundImage: `linear-gradient(225deg, 
                                rgba(${colors.brandingDark}, 0.6) 0% 15%, 
                                rgba(${colors.branding3},0.6) 15% 70%,
                                rgba(${colors.branding3},0.6) 65% 80%,
                                rgba(${colors.brandingDark}, 0.4) 80% 100%)`,
            top:"0",
            left: "0",
        },
        rect:{
            width: `${oneUnitWidth * 24}px`,
            height: `${oneUnitWidth * 24}px`,
            backgroundImage: `linear-gradient( 320deg, rgba(${colors.brandingDark}, .5), rgba(${colors.branding1},0.5), rgba(${colors.brandingDark}, .5))`,
            left: `-${oneUnitWidth }px`,
            overflow: "hidden",
            transform: "rotate(45deg)",
            display:"grid",
            placeContent: "center",
        },
        rect2:{
            width: `${oneUnitWidth * 20}px`,
            height: `${oneUnitWidth * 20}px`,
            backgroundImage: `linear-gradient(  rgba(${colors.brandingDark}, 0), rgba(${colors.brandingDark},1), rgba(${colors.brandingDark}, 0))`,
            overflow: "hidden",
            display:"grid",
            placeContent: "center",
            transform: "rotate(45deg)",
        },
        rect3:{
            width: `${oneUnitWidth * 15}px`,
            height: `${oneUnitWidth * 15}px`,
            backgroundImage: `linear-gradient( 320deg, rgba(${colors.branding1}, 0), rgba(${colors.branding1},0.1), rgba(${colors.branding1}, .7))`,
            overflow: "hidden",
            transform: "rotate(45deg)",
        },
        circle:{
            width: "25vw",
            height: "25vw",
            borderRadius: "50%",
            backgroundImage: `linear-gradient(rgba(${colors.brandingDark}, 1), rgba(${colors.branding3},0.3), 
                                rgba(${colors.brandingDark}, 1))`,
            position: "absolute",
            top:"-30vh",
            left: "8vw",
        },
        brandPosition :{
            position: "relative",
            margin: "0 auto",
            border: "0px solid red",
            width: "27%",
            height:"7%",
            zIndex: 1,
            display: "grid",
        }

    }

    const trioLight = {
        main:{
            overflow: "hidden",
            position: "relative",
            background:`rgb(${colors.brandingLight})`,
            backgroundImage: `linear-gradient(225deg, 
                                rgba(${colors.brandingLight}, 0.2) 0% 15%, 
                                rgba(${colors.branding2},0.2) 15% 70%,
                                rgba(${colors.branding2},0.2) 65% 80%,
                                rgba(${colors.brandingLight}, 0.4) 80% 100%)`,
            top:"0",
            left: "0",
        },
        rect:{
            width: `${oneUnitWidth * 24}px`,
            height: `${oneUnitWidth * 24}px`,
            backgroundImage: `linear-gradient( 320deg, rgba(${colors.brandingDark}, .5), rgba(${colors.branding2},0.5), rgba(${colors.brandingLight}, .5))`,
            left: `-${oneUnitWidth }px`,
            overflow: "hidden",
            transform: "rotate(45deg)",
            display:"grid",
            placeContent: "center",
        },
        rect2:{
            width: `${oneUnitWidth * 20}px`,
            height: `${oneUnitWidth * 20}px`,
            backgroundImage: `linear-gradient(  rgba(${colors.brandingLight}, 0), rgba(${colors.brandingLight},1), rgba(${colors.brandingLight}, 0))`,
            overflow: "hidden",
            display:"grid",
            placeContent: "center",
            transform: "rotate(45deg)",
        },
        rect3:{
            width: `${oneUnitWidth * 15}px`,
            height: `${oneUnitWidth * 15}px`,
            backgroundImage: `linear-gradient( 320deg, rgba(${colors.branding2}, 0), rgba(${colors.branding2},0.1), rgba(${colors.branding2}, .7))`,
            overflow: "hidden",
            transform: "rotate(45deg)",
        },
        circle:{
            width: "25vw",
            height: "25vw",
            borderRadius: "50%",
            backgroundImage: `linear-gradient(rgba(${colors.brandingDark}, 1), rgba(${colors.branding3},0.3), 
                                rgba(${colors.brandingDark}, 1))`,
            position: "absolute",
            top:"-30vh",
            left: "8vw",
        },
        brandPosition :{
            position: "relative",
            margin: "0 auto",
            border: "0px solid red",
            width: "27%",
            height:"7%",
            zIndex: 1,
            display: "grid",
        }

    }


  return (
    mode ?
        <div style={trio.main}>
            {/* <div style={trio.brandPosition}>
                <Branding />
            </div> */}
            <div style={trio.rect}>
                <div style={trio.rect2}>
                    <div style={trio.rect3}>
                
                    </div>
                </div>
            </div> 
            {/* <DarkToggle /> */}
        </div>
    :
        <div style={trioLight.main}>
            {/* <div style={trio.brandPosition}>
                <Branding />
            </div> */}
            <div style={trioLight.rect}>
                <div style={trioLight.rect2}>
                    <div style={trioLight.rect3}>
                
                    </div>
                </div>
            </div> 
            // <DarkToggle />
        </div>
  )
}

export default Trio