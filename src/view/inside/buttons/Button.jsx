import React, {useState, useEffect} from 'react'


const Button = ({icon, text, direction, openText}) => {
    const [ showTextLeft, setShowTextLeft ]= useState(false)
    const [ showTextRight, setShowTextRight ] = useState(false)

    const showtext = ()=> {
            setShowTextLeft(true)
            setShowTextRight(true)
            setTimeout(()=>{
                setShowTextLeft(false)
                setShowTextRight(false)
            }, 3000)
    }
    
    useEffect(()=>{
        if(!openText) return
        showtext()
    },[openText])

    // useEffect(()=>{},[showTextLeft, showTextRight])
  return (
    direction === 'left' ?
    <div className='btnExpandableLeft' 
        onMouseEnter={() => setShowTextLeft(true)} 
        onMouseLeave={() => setShowTextLeft(false)} 
        style={ {
                width: `${showTextLeft ? 100 : 30}px`, 
                gridTemplateColumns: `${showTextLeft ? "1fr" : "100px"} 30px`, 
                background: `rgba(255, 255, 255, ${showTextLeft ?.8 : 0})`} } 
    >
        { showTextLeft && <div className='btnText' style={{textAlign: "right"}} >{text}</div> }
        <div className='btn btn-round' style={{position:"absolute", right: 0, background: showTextLeft ? 'rgba(var(--podium1), 1)' : `rgba(var(--podium4), 1)`}}>{icon}</div>
    </div>
    :
    <div className='btnExpandableRight'
        onMouseEnter={() => setShowTextRight(true)} 
        onMouseLeave={() => setShowTextRight(false)} 
        style={ {
            width: `${showTextRight ? 100 : 30}px`, 
            gridTemplateColumns: `30px ${showTextRight ? "1fr" : "100px"}`, 
            background: `rgba(255, 255, 255, ${showTextRight ?.8 : 0})`} }
    >
        <div className='btn btn-round' style={{background: showTextRight ? 'rgba(var(--podium1), 1)' : `rgba(var(--podium4), 1)`}}>{icon}</div>
        { showTextRight && <div className='btnText' style={{textAlign: "left", width: openText && "130px"}} >{text}</div> }
    </div>
  )
}

export default Button