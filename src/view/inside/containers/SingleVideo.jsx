import React from 'react'


const SingleVideo = ({vidId}) => {
  const { name, jobTitle } = vidId
  return (
      
      <div className='SingleVideo' key={name ? name.replace(' ', '-') : ''}>
        
        <div  className="agVideo" 
              id={name ? name.replace(' ', '-') : ''} 
              style={{display: "flex"}}
        >     
        </div>
        <div className='namePlate'>
          <p>{name ? name : ''}</p>
          <h6>{jobTitle ? jobTitle : ''}</h6>
        </div> 
        
      </div>
    
  )
}

export default SingleVideo