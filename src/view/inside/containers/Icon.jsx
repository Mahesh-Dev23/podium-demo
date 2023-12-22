import React from 'react'
import {FaCommentDots, FaPaperPlane} from "react-icons/fa";
const Icon = ({type, name, color, right}) => {
    const initial = name.split(" ")
  return (
    <div className='icon' style={{ background:color, right: right}}>
        {
            type === "img" ? <img src={name} width="100%" />
            : 
            type === "icon" ? <FaPaperPlane />
            :
             <h3> {initial[0][0] + initial[1][0]}  </h3>
            
        }
        
    </div>
  )
}

export default Icon