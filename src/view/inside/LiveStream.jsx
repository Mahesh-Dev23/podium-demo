import React from 'react'
import SingleVideo from './SingleVideo'
import CounterCircle from './CounterCircle'

const LiveStream = () => {
  console.log("liveStream")
  return (
    <div className='liveStream'>
        {/* <div className="video"> */}
          {/* <SingleVideo /> */}
        {/* </div> */}
        <CounterCircle />
    </div>
  )
}

export default LiveStream