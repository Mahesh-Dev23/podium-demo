import React, {useState, useEffect} from 'react'
import timerun from '../../../controllers/timerun'

const TextOpenTime = ({text}) => { 
    
    const textArr = text.split("")
    const [ count, setCount ] = useState(0)
    const [ stopTime, setStopTime ] = useState(true)
    
    //console.log(text, count)
    const timeUp = textArr.length

    useEffect(()=>{
        setCount( 0 )
        setStopTime(true)
    },[text])

    useEffect(()=> {
        if(!stopTime) return
        counter()
    },[count, text])

    const counter = () => {

        if( count === timeUp ){
            //clearInterval( newCounter )
            setStopTime(false)
            setCount( timeUp )
        }else{
            
            timerun(1).then( res => setCount(count + 1))
        }
        
    }
    
    
    return(

        <h2 
            className="subtitle"
        >
            {text.split("", count)}
        </h2>
        
    )     
    
}

export default TextOpenTime