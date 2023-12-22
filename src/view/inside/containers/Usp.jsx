import React, { useState, useEffect} from 'react'
import time from '../../../controllers/time'

import TextRun from './TextRun'

const Usp = () => {
  const usp = [
    "Stream events like AGM, Podcast, Interviews, Townhall",
    "Register as admin and start creating events",
    "Create multiple events with one admin account",
    "Create events in easy steps",
    "Choose from design backgrounds and color schemes",
    "Create, Add, Edit and Delete events and speakers",
    "Internal chat box for internal communication",

  ]  

  const [ uspPoint, setUspPoint ] = useState(0)

  // const getOnePoint = (p) => {
  //   let point  = uspPoint
  //   if( uspPoint < point ) return
  //   setUspPoint( p + 1 ) 
  // } 
  
    

    useEffect(()=> { 
      // console.log("uspPoint ", uspPoint)
        if( uspPoint === usp.length  ) return setUspPoint( 0 )
        
        time(8, uspPoint).then(res => { 
          // console.log("res ", res)
          if (res === usp.length) { setUspPoint( 0 ) }
          if(res < usp.length && res === uspPoint + 1) { setUspPoint(res) }
      })
         }, [uspPoint, usp.length])
    // console.log(uspPoint)
    
  return (
    <div className='uspPanel'>
       
          <TextRun text = {usp[uspPoint]} />
        
    </div>
  )
}

export default Usp