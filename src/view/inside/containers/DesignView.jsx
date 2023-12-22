import React from 'react'

import {setDesign} from '../../../features/ui/uiSlice'
import {useDispatch} from 'react-redux'
import DarkToggle from '../buttons/DarkToggle'


const DesignView = ({design}) => {
  
  const dispatch = useDispatch()
  const getDesign = () => {
    dispatch(setDesign(design.name))
  }
  
  return (
    <div className='designView' id='' onClick={() => getDesign(design)} >
        <div className='designModuleDisplay' id={design.name}>
          {design.module}
          <DarkToggle />
        </div>
        <p className='designTitle'>{design.name}</p>
    </div>
  )
}

export default DesignView