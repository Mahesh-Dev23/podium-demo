
import React from 'react'

const TImeLine = ({steps})=> {
  //console.log("timeline ", steps.length)
  return (
    <div className='timeLine' style={{gridTemplateColumns: `repeat(${steps.length}, 1fr)`}}>
        {  steps.map( ( value, index ) =>
                <div className='stepblock' key={value.step.name}>
                    <div className='stepRound' style={{background: value.step.status ? "green" : "#c0c0c0"}}>
                        <h3>{value.step.count}</h3>
                    </div>
                    {
                        index < steps.length - 1 ?

                        <div className='stepline' style={{background: value.step.status ? "green" : "#c0c0c0"}}>
                            
                        </div> : null
                    }
                </div>
        )}
    </div>
  )
}

export default TImeLine