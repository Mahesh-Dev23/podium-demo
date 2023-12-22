import React, {useState, useEffect} from 'react'
import timerun from '../../../controllers/timerun'

const TextRun = ({text}) => {
    const textArr = text.split(" ")
    const [ count, setCount ] = useState(0)
    const [ stopTime, setStopTime ] = useState(true)
    // console.log(textArr)
    const timeUp = textArr.length
    const [ newWord, setNewWord ] = useState('')

    useEffect(()=>{
        setCount( 0 )
        setStopTime(true)
        setNewWord('')
    },[text])

    useEffect(()=> {
        if(!stopTime) return
        counter()
        if(count === timeUp )return
        setNewWord( `${newWord} ${textArr[count]}` )
        
    },[count])

    const counter = () => {
        // if(count === 0) return setNewWord( '' )

        if( count === timeUp ){
            //clearInterval( newCounter )
            setStopTime(false)
            setCount( timeUp )
            // setNewWord( '' )
            // console.log( count +" "+ timeUp)
        }else{
            timerun(1, 200).then( res => setCount(count + 1))
        }
        
    }
  return (
        
        <>
            <div className='uspPanelTitles' >{ newWord }</div>    
            {/* <div className='uspPanelTitlesNew' >{ textArr[count] }</div> */}
        </>
        
        
    
  )
}

export default TextRun