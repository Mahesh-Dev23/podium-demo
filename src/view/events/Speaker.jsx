import React from 'react'
import { FaUser, FaUserCheck, FaUserAltSlash } from 'react-icons/fa'
import { BiUser, BiUserCheck, BiUserX } from "react-icons/bi"

const Speaker = ({user, name}) => {
  return (
    <div className='slideUser'>
        {
            name === undefined ?
            <div className="user userSelected" style={{background: "darkgray"}}><BiUserX /></div>:
            name ?
            <div className="user userSelected"><BiUserCheck /></div> : <div className="user"><BiUser /></div>
        }
        
        <div>
            <p><span>{user?.name}</span></p>
            <p>{user?.jobTitle}</p>
        </div>
    </div>
  )
}

export default Speaker