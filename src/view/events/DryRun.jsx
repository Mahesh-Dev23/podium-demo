
import React, {useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'


// import TImeLine from './TImeLine'
import Slider from './Slider'
import {useNavigate} from 'react-router-dom'

const DryRun = () => {
    const {events, event} = useSelector( state => state.events )
    const {user, users} = useSelector( state => state.auth)
    const {selectedDesign, eventData, modal} = useSelector( state => state.ui )
    const dispatch = useDispatch()
    const navigate = useNavigate()
    

   

  return (
    <div className='podium' >
        {
          modal.stat === false ? <Slider /> : null
        }
    </div>
  )
}

export default DryRun